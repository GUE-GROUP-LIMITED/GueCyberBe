create table if not exists public.booking_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  company text,
  service text not null,
  message text,
  preferred_datetime_local text not null,
  timezone text not null default 'Europe/Brussels',
  calendar_event_id text,
  calendar_event_link text,
  created_at timestamptz not null default now()
);

alter table public.booking_requests enable row level security;

create policy if not exists "Allow public inserts for booking requests"
on public.booking_requests
for insert
to anon
with check (true);

create index if not exists booking_requests_created_at_idx on public.booking_requests(created_at desc);
