CREATE TABLE debts (
  id              TEXT                     PRIMARY KEY,
  initial_balance REAL                     NOT NULL,
  created         TIMESTAMP WITH TIME ZONE NOT NULL
);
