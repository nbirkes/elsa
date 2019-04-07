import { Database, Debt } from '../models/interfaces';
const pgPromise = require('pg-promise');

export const pgp = pgPromise();

let db_elsa: Database | undefined;

export async function listDebts(): Promise<Debt[]> {
  const query = `
    SELECT
      id, initial_balance, created
    FROM
      debts
  `;

  let results = await elsaDb().manyOrNone(query);

  return results.map(dbDataToDebt);
}

export async function initElsaDb(): Promise<void> {
  db_elsa = await pgp({database: 'elsa', host: 'localhost', user: 'elsa', password: 'jw8s0F4'});
}

export function elsaDb(): Database {
  if (!db_elsa) throw new Error("Elsa DB is not initialized");
  return db_elsa;
}

function dbDataToDebt(data: any): Debt {
  return {
    id: data.id,
    initialBalance: data.initian_balance,
    created: data.created,
  };
}
