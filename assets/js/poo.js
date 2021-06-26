/* Se declara la clase/objeto */
class Pokemon {
    // Se declaran las propiedades que tendra el objeto
    #name = "";
    #type = "";
    #evolutions = [];

/* Se pueden hacer varios constructores con las entradas que desearamos
    constructor() {

    }

    constructor(name) {
        this.name = name;
    }

    constructor(name, type) {
        this.name = name;
        this.type = type;
    } */
    
 // Se hace nuestro constructor que le asignara el valor a las propiedades
    constructor(name, type, evolutions = []) {
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions
    }

   /*  En JavaScript podemos utilizar la propiedad llamada "set"
    la cual permite definir un método que solo recibe un parámetro
    y nunca tiene retorno, en este ejemplo nos permite modificar 
    los atributos de la clase.*/
    set name(value) {
        this.#name = value
    }

    set type(value) {
        this.#type = value
    }

    set evolutions(value) {
        this.#evolutions = value
    }

    /* En JavaScript podemos utilizar la propiedad llamada "get" 
    la cual nos permite definir un método que no recibe parámetros
    y siempre tiene retorno, en este ejemplo nos permite consultar 
    los atributos de la clase. */
    get name() {
        return this.#name
    }

    get type() {
        return this.#type
    }

    get evolutions() {
        return this.#evolutions
    }

    attack() {
        return  `${this.#name}, esta atacando`;
    }

    evolve( evolution = 0) {
        const EVOLVE = this.#evolutions[evolution] || "";
        let message = "No puedo evolucionar";

        if(EVOLVE) {
            message = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name = EVOLVE
        }

        return message
    }

}

const Charmander = new Pokemon('Charmander', 'Fuego', ['Charmaleon', 'Charizard']);
const Squirtle = new Pokemon('Squirtle', 'Agua', ['Wartortle', 'Blastoise']);

/* console.log(Charmander.name);
console.log(Charmander.attack());
console.log(Charmander.evolve());
console.log(Charmander.attack());
console.log(Charmander.evolve(1));
Charmander.name = 'Pikachu';
console.log(Charmander.name);
console.log(Squirtle.name); */

