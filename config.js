/**
 * Created by Manjesh on 14-05-2016.
 */

module.exports = {
  sql: {
    host: 'host_ip',
    database: 'oauth_demo',
    username: 'root',
    password: '',
    dialect: 'mysql', // PostgreSQL, MySQL, MariaDB, SQLite and MSSQL See more: http://docs.sequelizejs.com/en/latest/
    logging: true,
    timezone: '+05:30',
  },
  mongo: {
    uri: 'mongodb://gloryque:intranet@192.168.0.200:27017/gloryque_quarc'
  },
  seedDB:false,
  seedMongoDB:false,
  seedDBForce:true,
  db:'mongo' // mongo,sql if you want to use any SQL change dialect above in sql config
}
