import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import CocktailAPI from './modules/cocktailAPI.js';

const cocktailAPI = new CocktailAPI();

const categories = document.querySelector('#categories');