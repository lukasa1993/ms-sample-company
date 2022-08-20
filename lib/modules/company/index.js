import { query } from '../datastore/index.js';

export async function byUUID(uuid) {
  const { rows: [user] } = await query(`
      select "uuid",
             "name",
             "email",
             "meta",
             "created",
             "updated"
      from "Company"
      where "uuid" = $1
  `, [uuid]);

  return user;
}
