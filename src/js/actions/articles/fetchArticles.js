import axios from "axios";
import Properties from "../../properties";
export const fetchArticlesUrl = Properties.fetchArticlesUrl;

const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_ARTICLES_PENDING = 'FETCH_ARTICLES_PENDING';
export const FETCH_ARTICLES_REJECTED = 'FETCH_ARTICLES_REJECTED';
export const FETCH_ARTICLES_FULFILLED = 'FETCH_ARTICLES_FULFILLED';

export default () => ({
    type: FETCH_ARTICLES,
    payload: axios.get(fetchArticlesUrl)
});
