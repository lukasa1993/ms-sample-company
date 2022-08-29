exports.up = async client => {
  console.log('ffs')
  await client`CREATE EXTENSION IF NOT EXISTS pgcrypto`;
  await client`drop table IF EXISTS "Company"."Company"`;
  await client`
      create table "Company"."Company"
      (
          uuid    uuid                     default gen_random_uuid() not null,
          name    varchar                                            not null,
          email   varchar                                            not null,
          meta    jsonb                    default '{}'              not null,
          created timestamp with time zone default now()             not null,
          updated timestamp with time zone default now()             not null
      );
  `;
  await client`
      insert into "Company"."Company"("name", "email")
      values ('LLC Demo', 'support@example.com');
  `;
};

exports.down = async client => {
  // just in case...
};
