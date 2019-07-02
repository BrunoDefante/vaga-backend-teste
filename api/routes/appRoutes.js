'use strict';
module.exports = function(app){
    var todoList = require('../controller/appController');

    app.route('/pokemons/all/') 
         .get(todoList.list_all_pokemon);

    app.route('/pokemons/all/:page') 
        .get(todoList.list_all_pokemon);

    app.route('/pokemons/all/filter/:type_1')
        .get(todoList.list_pokemon_by_filter);
    
    app.route('/pokemons/all/filter/:type_1/page/:page')
        .get(todoList.list_pokemon_by_filter);

    app.route('/pokemons/all/filter/:type_1/:type_2')
        .get(todoList.list_pokemon_by_filter);
        
    app.route('/pokemons/all/filter/:type_1/:type_2/page/:page')
        .get(todoList.list_pokemon_by_filter);    

    app.route('/pokemons/searchById/:pokeId')
        .get(todoList.list_pokemon_by_id);

    app.route('/pokemons/searchByName/:pokeName')
        .get(todoList.list_pokemon_by_name);
};

