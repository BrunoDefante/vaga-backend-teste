#API DETAILS

**get all pokemons**
localhost:3000/pokemons/all

**get all pokemons with pagination**
localhost:3000/pokemons/all/${number}

**get pokemons by filter**
localhost:3000/pokemons/all/filter/grass

**get pokemons by filter with type and pagination**
localhost:3000/pokemons/all/filter/${type_1}/page/${number}

**get pokemons by filter with two types**
localhost:3000/pokemons/all/filter/${type_1}/${type_2}

**get pokemons by filter with two types and pagination**
localhost:3000/pokemons/all/filter/${type_1}/${type_2}/page/${number}

**get pokemon by id**
localhost:3000/pokemons/searchById/${number}

**get pokemon by name**
localhost:3000/pokemons/searchByName/${name}