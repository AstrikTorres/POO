class Pokedex {
    getinfo(name) {
        // Se realizan cambios para conseguir la data desde la API.
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
        .then(data => data.json())
        .then(data => {
            // Desestructuración
            const [DATA = null] = data;
            const MESSAGE = DATA || `El pokemón ${name} no existe`;

            console.log(MESSAGE);
        })
    }
}

const POKEDEX = new Pokedex();
POKEDEX.getinfo("charmander");