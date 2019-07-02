module.exports = {
    insertTabela: () => {
        verificaTable();
    }
};

const insertKnex = () => {
    const xlxs = require('node-xlsx');
    const knex = require('./knexFile');
    const filePath = './PokemonGo.xlsx';
    console.log(`Arquivo inserido em:  ${new Date()}`);
    const plan = xlxs.parse(filePath);
    const finalData = plan[0].data.map(([nome, pokedex_number, img_name, generation,
                                        evolution_stage, evolved, family_id, cross_gen,
                                        type_1, type_2, weather_1, weather_2, stat_total,
                                        atk, def, sta, legendary, aquireable,spawns, regional,
                                        raidable, hatchable, shiny, nest, status_new,
                                        not_gettable, future_evolve, cp_100_40, cp_100_39]) => {
      return { nome, pokedex_number, img_name, generation,
        evolution_stage, evolved, family_id, cross_gen,
        type_1, type_2, weather_1, weather_2, stat_total,
        atk, def, sta, legendary, aquireable,spawns, regional,
        raidable, hatchable, shiny, nest, status_new,
        not_gettable, future_evolve, cp_100_40, cp_100_39 };
    });
    knex.batchInsert('tbl_pokemon', finalData)
    .then(function(msg){
        console.log('Os Dados Foram Carregados na Tabela!');
    })
    .catch(function(error){
        console.log('error');
    });
    console.log('End of fs.watch() wait for callback from batchInsert');
}

const verificaTable = async () =>{
    const knex = require('./knexFile')
   await knex.schema.hasTable('tbl_pokemon').then((exist) => {
        if(!exist){
            knex.schema.createTable('tbl_pokemon', (table) => {
                table.increments('cod_pokemon');
                table.string('nome'); 
                table.string('pokedex_number'); 
                table.string('img_name');
                table.string('generation');
                table.string('evolution_stage');
                table.string('evolved');
                table.string('family_id'); 
                table.string('cross_gen');
                table.string('type_1');
                table.string('type_2'); 
                table.string('weather_1'); 
                table.string('weather_2'); 
                table.string('stat_total');
                table.string('atk');
                table.string('def'); 
                table.string('sta'); 
                table.string('legendary'); 
                table.string('aquireable');
                table.string('spawns');
                table.string('regional');
                table.string('raidable'); 
                table.string('hatchable'); 
                table.string('shiny');
                table.string('nest');
                table.string('status_new');
                table.string('not_gettable'); 
                table.string('future_evolve'); 
                table.string('cp_100_40'); 
                table.string('cp_100_39');
            }).then();
        }
    })     


    knex.select().count('cod_pokemon as a').from('tbl_pokemon').then(function(exist){
        if (exist[0].a <= 0){
            insertKnex();
        }
    });

};