var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'mysql',
        user: 'root',
        password: '',
        database: 'pokemon',
        insecureAuth: true
    }

    });

module.exports = knex;