import { heroes } from "../data/heroes";

export const getHeroeByName = (name = '') => {

    console.log('called')

    if( name === '') {
        return [];
    }

     name = name.toLowerCase();

     return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name))

}