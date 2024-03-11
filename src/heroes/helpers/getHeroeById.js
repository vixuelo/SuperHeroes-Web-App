import {heroes} from '../data/heroes'
import imgUrl from '../../assets/heroes/marvel-spider.jpg'

export const getHeroeById = (id) => {
    return heroes.find(heroe=>heroe.id===id);
}
