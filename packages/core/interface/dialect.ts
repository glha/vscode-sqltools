import { DatabasesFilterType } from './connection';

interface Filters {
  databaseFilter?: DatabasesFilterType;
};

export interface DialectQueries {
  fetchTables: (filters?: Filters) => string;
  describeTable: string;
  fetchColumns: (filters?: Filters) => string;
  fetchRecords: string;
  fetchFunctions?: (filters?: Filters) => string;
  [id: string]: string | ((...args: any[]) => string);
}

export enum DatabaseDialect {
  MSSQL = 'MSSQL',
  MySQL = 'MySQL',
  MariaDB = 'MariaDB',
  PostgreSQL = 'PostgreSQL',
  'AWS Redshift' = 'AWS Redshift',
  SQLite = 'SQLite',
  OracleDB = 'OracleDB',
  SAPHana = 'SAPHana',
  Cassandra = 'Cassandra',
}
