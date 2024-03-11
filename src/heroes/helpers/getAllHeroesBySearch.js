import {heroes} from '../data/heroes'
export const getAllHeroesBySearch= (search) => {
   
    return (heroes.filter(heroe=>heroe.id.includes(search)));
}
