'use strict';

var Pokemon = require('../model/appModels');

exports.list_all_pokemon = function(req, res){
    Pokemon.getAllPokemon(req.params.page, function(err, pokemon){
        if(err)
            res.send(err);        
        res.json(pokemon);
    });
};

exports.list_pokemon_by_id = function(req, res){
    Pokemon.getPokemonById(req.params.pokeId, function (err, pokemon){
        if(err)
            res.send(err);
        res.json(pokemon);
    });
};

exports.list_pokemon_by_name = function (req, res){
    Pokemon.getPokemonByName(req.params.pokeName, function (err, pokemon){
        if(err)
            res.send(err);
        res.json(pokemon);
    });
};

exports.list_pokemon_by_filter = function (req, res){
    Pokemon.getAllByFilter(req.params.type_1, req.params.type_2, req.params.page, function (err, pokemon){
        if(err)
            res.send(err);
        res.json(pokemon);
    });
};