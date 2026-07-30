// KapitalVoice — service worker
// Задача: (1) сделать сайт устанавливаемым как приложение (PWA),
// (2) ускорить повторную загрузку статичных файлов (CSS, шрифты, иконки, config.js).
// ВАЖНО: запросы к Supabase (сами данные — опросы, тесты, обращения) сюда
// НЕ попадают и никогда не кэшируются — сотрудники всегда видят свежие данные.

var CACHE_NAME = 'kv-shell-v4';

var SHELL_FILES = [
  'index.html',
  'login-admin.html',
  'forms.html',
  'feedback.html',
  'quiz-take.html',
  'admin.html',
  'form-builder.html',
  'kapitalvoice.css?v=8',
  'config.js',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(SHELL_FILES).catch(function() {
        // Если какого-то файла ещё нет (например, страница удалена) — не роняем установку
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(n) { return n !== CACHE_NAME; })
             .map(function(n) { return caches.delete(n); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  // Чужие домены (Supabase, шрифты Google и т.п.) и любые запросы не GET —
  // не трогаем вообще, пусть идут напрямую в сеть как обычно.
  if (url.origin !== self.location.origin || event.request.method !== 'GET') {
    return;
  }

  // HTML-страницы: сначала сеть (чтобы всегда видеть свежую версию сайта),
  // и только если сети нет вообще — берём последнюю сохранённую копию.
  if (event.request.mode === 'navigate' || url.pathname.endsWith('.html')) {
    event.respondWith(
      fetch(event.request)
        .then(function(resp) {
          var copy = resp.clone();
          caches.open(CACHE_NAME).then(function(cache) { cache.put(event.request, copy); });
          return resp;
        })
        .catch(function() { return caches.match(event.request); })
    );
    return;
  }

  // Статика (css/js/иконки): отдаём из кэша мгновенно, параллельно тихо обновляем в фоне.
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      var network = fetch(event.request).then(function(resp) {
        var copy = resp.clone();
        caches.open(CACHE_NAME).then(function(cache) { cache.put(event.request, copy); });
        return resp;
      }).catch(function() { return cached; });
      return cached || network;
    })
  );
});
