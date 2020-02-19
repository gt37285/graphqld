
/**modulos para la base de datos */

const { Pool } = require('pg')


const pool = new Pool({
    user: "postgres",
    host: 'localhost',
    port: 5432,
    database: 'blogs',
    password: process.env.PASSWORD || 'Lp3lkjkszpj'
})


pool.connect( () => console.log('database funcionando'))

module.exports = pool