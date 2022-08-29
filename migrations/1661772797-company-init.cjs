exports.up = async client => {
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

  await client`
      create unique index email_unique
          on "Company"."Company" (email);
  `;
};

exports.down = async client => {
  // just in case...
};
