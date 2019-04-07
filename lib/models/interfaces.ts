import * as pgp from 'pg-promise';

export interface Debt {
  id: string;
  initialBalance: number;
  created: Date;
}

export interface Database extends pgp.IDatabase<{}> {
}
