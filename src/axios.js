import axios from 'axios';

/** base url to make requsts to the movie database */

const instance = axios.create({
baseURL:"https://api.themoviedb.org/3",

});

export default instance; // only one default export in a file. but several exports.