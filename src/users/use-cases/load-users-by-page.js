import {localhostUserToModel} from '../mappers/localhost-user-mappers';

/**
 * 
 * @param {Number} page 
 * returns {User}
 */
export const loadUsersByPage = async(page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const json = await res.json();
    
    if(page > json.last) return [];

    const users = json.data.map(userLike => localhostUserToModel(userLike));
   
    return users;
}