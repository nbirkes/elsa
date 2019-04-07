import { initElsaDb, listDebts } from './repository/pg-elsa';

main().catch(console.error);

export async function main(): Promise<void> {
  await initElsaDb();

  let debts = await listDebts();
  console.log(JSON.stringify(debts));
}
