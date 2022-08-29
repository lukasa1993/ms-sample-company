import sql from 'ms-db';

export async function byUUID(uuid) {
  const [company] = await sql`
      select "uuid",
             "name",
             "email",
             "meta",
             "created",
             "updated"
      from "Company"."Company"
      where "uuid" = ${uuid}
  `;

  return company;
}

export async function byEmail(email) {

  const [company] = await sql`
      select "uuid",
             "name",
             "email",
             "meta",
             "created",
             "updated"
      from "Company"."Company"
      where "email" = ${email}
  `;

  return company;
}
