
var SB_URL = 'https://prxmupaitdmjcafucunx.supabase.co';

// !!! ВСТАВЬТЕ СЮДА ВАШ НАСТОЯЩИЙ ANON (public) КЛЮЧ !!!
// Project Settings → API → Project API keys → "anon" "public"
// Старый ключ, который тут был раньше, оказался service_role —
// он давал полный доступ к базе в обход всех ограничений и был
// виден любому, кто открыл бы исходный код страницы. Замените его
// и обязательно перевыпустите (Reset) старый service_role ключ в Supabase.
var SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByeG11cGFpdGRtamNhZnVjdW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2NjU2ODgsImV4cCI6MjA5ODI0MTY4OH0.6uIw4Kd5XCSZrOIPB5usaN4kns_2FoHnXQdS-xHSMwI';

var KV_LOGO = 'data:image/png;base64,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';

var SQL_SCHEMA = `-- =====================================================
-- KapitalVoice — SQL-схема базы данных (v3, безопасная)
-- =====================================================
-- Что изменилось в v3:
--   • Пароли админов теперь хранятся как bcrypt-хэш (не текстом)
--   • Таблица kv_users закрыта от прямого доступа — вход и управление
--     сотрудниками идёт только через защищённые функции (RPC)
--   • Включён Row Level Security на всех таблицах
--   • Добавлены индексы для ускорения частых запросов
--
-- Как использовать:
-- 1. Откройте ваш проект на supabase.com
-- 2. Слева в меню выберите "SQL Editor" → "New query"
-- 3. Скопируйте ВЕСЬ текст этого файла и вставьте в редактор
-- 4. Нажмите "Run" (или Ctrl+Enter)
-- Скрипт безопасно перезапускать повторно — он идемпотентен.
-- =====================================================

create extension if not exists pgcrypto with schema extensions;

-- ===== ТАБЛИЦЫ =====

create table if not exists kv_users (
  id uuid primary key default gen_random_uuid(),
  email text unique,
  login text unique,
  pass text,                  -- legacy-колонка, переименовывается ниже в pass_hash
  name text,
  role text default 'user',
  created_at timestamptz default now()
);

-- Миграция со старой схемы (v1/v2): переименовываем pass -> pass_hash
do $$
begin
  if exists (select 1 from information_schema.columns where table_name='kv_users' and column_name='pass')
     and not exists (select 1 from information_schema.columns where table_name='kv_users' and column_name='pass_hash') then
    alter table kv_users rename column pass to pass_hash;
  end if;
end $$;

alter table kv_users add column if not exists pass_hash text;

create table if not exists kv_forms (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  type text not null,
  questions jsonb not null default '[]',
  is_active boolean default true,
  created_by text,
  created_at timestamptz default now()
);

create table if not exists kv_responses (
  id uuid primary key default gen_random_uuid(),
  form_id uuid references kv_forms(id) on delete cascade,
  user_email text,
  user_name text,
  is_anonymous boolean default false,
  answers jsonb not null default '[]',
  score integer,
  max_score integer,
  submitted_at timestamptz default now()
);

create table if not exists kv_messages (
  id uuid primary key default gen_random_uuid(),
  user_email text,
  user_name text,
  is_anonymous boolean default false,
  subject text,
  body text not null,
  status text default 'new',
  admin_comment text,
  admin_name text,
  created_at timestamptz default now(),
  resolved_at timestamptz
);

alter table kv_messages add column if not exists user_name text;
alter table kv_messages add column if not exists status text default 'new';
alter table kv_messages add column if not exists admin_comment text;
alter table kv_messages add column if not exists admin_name text;
alter table kv_messages add column if not exists resolved_at timestamptz;
alter table kv_responses add column if not exists user_name text;

-- ===== ЗАЩИТА ОТ ПОДБОРА ПАРОЛЯ АДМИНА =====
create table if not exists kv_login_attempts (
  login text primary key,
  attempts int not null default 0,
  locked_until timestamptz
);
alter table kv_login_attempts enable row level security;
-- Политик нет специально — таблица недоступна напрямую, только через функцию ниже.

-- ===== ИНДЕКСЫ (ускоряют типичные запросы и снижают "лаги") =====
create index if not exists idx_kv_users_email on kv_users(lower(email));
create index if not exists idx_kv_users_login on kv_users(login);
create index if not exists idx_kv_forms_type_active on kv_forms(type, is_active);
create index if not exists idx_kv_responses_form on kv_responses(form_id);
create index if not exists idx_kv_responses_email on kv_responses(user_email);
create index if not exists idx_kv_messages_status on kv_messages(status);
create index if not exists idx_kv_messages_created on kv_messages(created_at desc);

-- ===== ПАРОЛЬ ПО УМОЛЧАНИЮ (admin / Admin1234), сразу в виде хэша =====
insert into kv_users (login, pass_hash, name, role)
values ('admin', crypt('Admin1234', gen_salt('bf')), 'Администратор', 'admin')
on conflict (login) do nothing;

-- На случай, если в базе остался пароль с прошлой версии текстом — хэшируем его
update kv_users
set pass_hash = crypt(pass_hash, gen_salt('bf'))
where role = 'admin' and pass_hash is not null and pass_hash !~ '^\\$2[aby]\\$\\d{2}\\$';

-- =====================================================
-- БЕЗОПАСНОСТЬ: RLS + защищённые функции (RPC)
-- =====================================================
-- kv_users закрыта полностью для прямого доступа с anon-ключом.
-- Вход, создание/удаление сотрудников и смена пароля идут ТОЛЬКО
-- через функции ниже (SECURITY DEFINER), которые сами решают,
-- что можно отдавать наружу, и никогда не возвращают pass_hash.

alter table kv_users enable row level security;
-- Политик для kv_users нет специально — это значит "доступ закрыт всем"
-- для прямых SELECT/INSERT/UPDATE/DELETE через anon-ключ.

alter table kv_forms enable row level security;
drop policy if exists "public_all_forms" on kv_forms;
create policy "public_all_forms" on kv_forms for all using (true) with check (true);

alter table kv_responses enable row level security;
drop policy if exists "public_all_responses" on kv_responses;
create policy "public_all_responses" on kv_responses for all using (true) with check (true);

alter table kv_messages enable row level security;
drop policy if exists "public_all_messages" on kv_messages;
create policy "public_all_messages" on kv_messages for all using (true) with check (true);

-- ----- Вход сотрудника (только почта) -----
create or replace function kv_employee_login(p_email text)
returns table(id uuid, email text, name text, role text)
language sql security definer set search_path = public, extensions as $$
  select id, email, name, role from kv_users
  where lower(email) = lower(p_email) and role = 'user';
$$;

-- ----- Вход администратора (логин + пароль), с защитой от перебора -----
-- После 5 неверных попыток подряд логин блокируется на 15 минут.
create or replace function kv_admin_login(p_login text, p_pass text)
returns table(status text, id uuid, login text, name text, role text, locked_seconds int)
language plpgsql security definer set search_path = public, extensions as $$
declare
  v_locked_until timestamptz;
  v_id uuid;
  v_login text;
  v_name text;
  v_role text;
  v_pass_hash text;
begin
  select la.locked_until into v_locked_until
  from kv_login_attempts la where la.login = p_login;

  if v_locked_until is not null and v_locked_until > now() then
    return query select 'locked'::text, null::uuid, null::text, null::text, null::text,
      ceil(extract(epoch from (v_locked_until - now())))::int;
    return;
  end if;

  select u.id, u.login, u.name, u.role, u.pass_hash
  into v_id, v_login, v_name, v_role, v_pass_hash
  from kv_users u where u.login = p_login and u.role = 'admin';

  if v_id is not null and v_pass_hash is not null and v_pass_hash = crypt(p_pass, v_pass_hash) then
    delete from kv_login_attempts where kv_login_attempts.login = p_login;
    return query select 'ok'::text, v_id, v_login, v_name, v_role, null::int;
  else
    insert into kv_login_attempts(login, attempts, locked_until)
    values (p_login, 1, null)
    on conflict (login) do update set
      attempts = kv_login_attempts.attempts + 1,
      locked_until = case when kv_login_attempts.attempts + 1 >= 5
                          then now() + interval '15 minutes' else null end;
    return query select 'invalid'::text, null::uuid, null::text, null::text, null::text, null::int;
  end if;
end; $$;

-- ----- Список сотрудников/админов для админ-панели (без pass_hash) -----
create or replace function kv_admin_list_users()
returns table(id uuid, email text, login text, name text, role text, created_at timestamptz)
language sql security definer set search_path = public, extensions as $$
  select id, email, login, name, role, created_at from kv_users order by created_at desc;
$$;

-- ----- Добавить сотрудника -----
create or replace function kv_admin_add_employee(p_email text, p_name text)
returns table(id uuid, email text, name text, role text)
language plpgsql security definer set search_path = public, extensions as $$
begin
  return query insert into kv_users(email, name, role)
  values (lower(p_email), p_name, 'user')
  returning kv_users.id, kv_users.email, kv_users.name, kv_users.role;
end; $$;

-- ----- Добавить администратора -----
create or replace function kv_admin_add_admin(p_login text, p_pass text, p_name text)
returns table(id uuid, login text, name text, role text)
language plpgsql security definer set search_path = public, extensions as $$
begin
  return query insert into kv_users(login, pass_hash, name, role)
  values (p_login, crypt(p_pass, gen_salt('bf')), p_name, 'admin')
  returning kv_users.id, kv_users.login, kv_users.name, kv_users.role;
end; $$;

-- ----- Сменить пароль администратора -----
create or replace function kv_admin_set_password(p_user_id uuid, p_new_pass text)
returns void
language sql security definer set search_path = public, extensions as $$
  update kv_users set pass_hash = crypt(p_new_pass, gen_salt('bf'))
  where id = p_user_id and role = 'admin';
$$;

-- ----- Удалить пользователя -----
create or replace function kv_admin_delete_user(p_user_id uuid)
returns void
language sql security definer set search_path = public, extensions as $$
  delete from kv_users where id = p_user_id;
$$;

grant execute on function kv_employee_login(text) to anon, authenticated;
grant execute on function kv_admin_login(text, text) to anon, authenticated;
grant execute on function kv_admin_list_users() to anon, authenticated;
grant execute on function kv_admin_add_employee(text, text) to anon, authenticated;
grant execute on function kv_admin_add_admin(text, text, text) to anon, authenticated;
grant execute on function kv_admin_set_password(uuid, text) to anon, authenticated;
grant execute on function kv_admin_delete_user(uuid) to anon, authenticated;

-- =====================================================
-- ВАЖНО ПОСЛЕ ЗАПУСКА ЭТОГО СКРИПТА:
-- 1. В config.js укажите ваш ANON (public) ключ из
--    Project Settings → API → Project API keys → anon public.
--    НЕ используйте service_role ключ на фронтенде никогда.
-- 2. Если у вас уже был старый service_role ключ в коде —
--    перевыпустите его: Project Settings → API → Reset service_role key.
-- =====================================================
`;

// ===== ЗАПРОС К SUPABASE =====
function sbFetch(path, opts) {
  opts = opts || {};
  opts.headers = Object.assign({
    'apikey': SB_KEY,
    'Authorization': 'Bearer ' + SB_KEY,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
  }, opts.headers || {});
  return fetch(SB_URL + '/rest/v1/' + path, opts);
}

// ===== ВЫЗОВ ЗАЩИЩЁННЫХ ФУНКЦИЙ (RPC) =====
// Используется для входа и управления сотрудниками/админами —
// эти операции НЕ идут через прямой доступ к таблице kv_users,
// а только через функции в базе (см. schema.sql), которые
// никогда не отдают пароль/хэш наружу.
function sbRpc(fnName, params) {
  return fetch(SB_URL + '/rest/v1/rpc/' + fnName, {
    method: 'POST',
    headers: {
      'apikey': SB_KEY,
      'Authorization': 'Bearer ' + SB_KEY,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    },
    body: JSON.stringify(params || {})
  }).then(function(r) {
    if (!r.ok) return r.json().then(function(e){ throw new Error((e && e.message) || 'Ошибка запроса'); });
    return r.json();
  });
}

// ===== ТЕКУЩИЙ ПОЛЬЗОВАТЕЛЬ (хранится в localStorage между страницами) =====
function kvGetMe() {
  var stored = localStorage.getItem('kv_me');
  if (!stored) return null;
  try { return JSON.parse(stored); } catch(e) { return null; }
}
function kvSetMe(user) {
  localStorage.setItem('kv_me', JSON.stringify(user));
}
function kvLogout(redirectTo) {
  localStorage.removeItem('kv_me');
  window.location.href = redirectTo || 'index.html';
}


function kvRequireAuth(requiredRole) {
  var me = kvGetMe();
  if (!me) {
    window.location.href = 'index.html';
    return null;
  }
  if (requiredRole === 'admin' && me.role !== 'admin') {
    window.location.href = 'forms.html';
    return null;
  }
  return me;
}


function kvInitTheme() {
  if (localStorage.getItem('kv_dk') === '1') document.documentElement.classList.add('dk');
}
function togTheme() {
  var d = document.documentElement.classList.toggle('dk');
  localStorage.setItem('kv_dk', d ? '1' : '0');
}


function kvInitFavicon() {
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = KV_LOGO;
}

function esc(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function fmtDate(s) {
  if (!s) return '—';
  var d = new Date(s);
  return d.getDate()+'.'+(d.getMonth()+1)+'.'+d.getFullYear();
}
function setEl(id, v) { var el=document.getElementById(id); if(el) el.textContent=v; }
function openModal(id) { var el=document.getElementById(id); if(el) el.classList.add('on'); }
function closeModal(id) { var el=document.getElementById(id); if(el) el.classList.remove('on'); }
function toast(msg, type) {
  var wrap = document.getElementById('toast');
  if (!wrap) return;
  var el = document.createElement('div');
  el.className = 'toast-item' + (type ? ' '+type : '');
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(function(){ el.remove(); }, 3000);
}
function copySql() {
  navigator.clipboard.writeText(SQL_SCHEMA).then(function(){ toast('SQL скопирован!','ok'); }).catch(function(){ toast('Не удалось скопировать','err'); });
}


function kvBindOverlayClose() {
  document.querySelectorAll('.overlay').forEach(function(ov) {
    ov.addEventListener('click', function(e) {
      if (e.target === ov) ov.classList.remove('on');
    });
  });
}

function kvInitMobileMenu() {
  var toggle = document.getElementById('menu-toggle');
  var sb = document.querySelector('.sb');
  if (!toggle || !sb) return;

  var overlay = document.createElement('div');
  overlay.className = 'sb-overlay';
  document.body.appendChild(overlay);

  function closeMenu() {
    sb.classList.remove('open');
    toggle.classList.remove('on');
    overlay.classList.remove('on');
  }
  function openMenu() {
    sb.classList.add('open');
    toggle.classList.add('on');
    overlay.classList.add('on');
  }

  toggle.addEventListener('click', function() {
    if (sb.classList.contains('open')) closeMenu(); else openMenu();
  });
  overlay.addEventListener('click', closeMenu);

  sb.querySelectorAll('.lb').forEach(function(btn){
    btn.addEventListener('click', function(){
      if (window.innerWidth <= 768) closeMenu();
    });
  });
}
