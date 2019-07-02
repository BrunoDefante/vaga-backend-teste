'use strict'
const knex = require('../knexFile');
var Pokemon = function(pokemon){
    this.pokemon = pokemon.pokemon;
};

Pokemon.getAllPokemon = function(page, result) {
    knex.select().from('tbl_pokemon')
    .limit(10).offset(page*10).then(function (err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log('task: ', res);
            result(null, res);
        }
    });
};

Pokemon.getAllByFilter = function(type_1, type_2, page, result){
    let types = {type_1: type_1};
    if(!!type_2) types.type_2 = type_2;

    knex.select().from('tbl_pokemon').where(types).limit(10).offset(page*10).then(function (err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log('task: ', res);
            result(null, res);
        }
    });
};

Pokemon.getPokemonById = function(pokeId, result){
    knex.select('*').from('tbl_pokemon').where({
        cod_pokemon: pokeId
    }).then( function (err, res){
        if(err){
            console.log('error: ', err);
            result(err, null);
        }else{
            result(null, res); 
        }
    });
};

Pokemon.getPokemonByName = function(pokeName, result){
    knex.select('*').from('tbl_pokemon').where({
        nome: pokeName
    }).then( function (err, res){
        if(err){
            console.log('error', err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
}
module.exports = Pokemon;