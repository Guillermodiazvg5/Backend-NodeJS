const { Pool } = require("pg");
const { db } = require("./config");


/*

const pool = new Pool({

    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database


})

*/

const pool = new Pool({

    user: 'databasepostgres',
    password: 'ThxCrD8zwBlyDlYqnPiXEpkGUyLfG5CU' ,
    host: 'dpg-cmdmadmd3nmc73dl63v0-a.oregon-postgres.render.com',
    port: 5432,
    database: 'healthfoods' ,
    ssl: true

    

})


module.exports= pool;