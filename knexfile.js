// no need to change this file
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true, // needed for sqlite but not postgress
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
  pool: { // sqlite specific when there are multiple tables that reference each other
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    },
  },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/dealer.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/testing.db3' },
  },
}
// Testing uses a different db than dev/production since most data gets obliterated during testing

