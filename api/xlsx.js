'use strict';

const fs = require('fs');

const xlxs = require('node-xlsx');

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

const filePath = './Programacao.xlsx';

function excel(){
    fs.watchFile(filePath, function(){
        console.log(`Arquivo alterado em:  ${new Date()}`);
    
        const plan = xlxs.parse(filePath);
    
        const finalData = plan[0].data.map(([_, COD_FAMILIA]));
    
        knex.batchInsert('PROGRAMACAO', finalData)
        .then(function(msg){
            console.log('SUCESSO!');
        })
        .catch(function(error){
            console.log('error');
        });
    
        console.log('End of fs.watch() wait for callback from batchInsert');
    });
}

