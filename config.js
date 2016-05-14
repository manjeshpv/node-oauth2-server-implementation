/**
 * Created by Manjesh on 14-05-2016.
 */

module.exports = {
  sql: {
    database: 'oauth_demo',
    username: 'root',
    password: '',
    dialect: 'mysql', // PostgreSQL, MySQL, MariaDB, SQLite and MSSQL See more: http://docs.sequelizejs.com/en/latest/
    logging: true,
    timezone: '+05:30',
  },
  seedDB:false,
  seedDBForce:true
}