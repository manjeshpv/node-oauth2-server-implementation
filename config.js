/**
 * Created by Manjesh on 14-05-2016.
 */

module.exports = {
  sql: {
    database: 'global_oauth',
    username: 'root',
    password: 'r7585ick',
    dialect: 'mysql', // PostgreSQL, MySQL, MariaDB, SQLite and MSSQL See more: http://docs.sequelizejs.com/en/latest/
    logging: true,
    timezone: '+05:30',
    host: "127.0.0.1",
    port: 3306
  },
  mongo: {
    uri: 'mongodb://username:password@domain.mongolab.com:63439/tsc'
  },
  seedDB: false,
  seedMongoDB: false,
  seedDBForce: true,
  db: 'sql', // mongo,sql if you want to use any SQL change dialect above in sql config
  session : {
    cookieName: 'browserSession', 
    cookieDomain: '', //'.notoutofthebox.com'
    whiteListedDomains: 'http://127.0.0.1:3000', // ''

  }
}