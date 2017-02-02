import axios from "axios";
import Properties from "../../properties";
export const fetchArticleUrl = Properties.fetchArticleUrl;

const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const FETCH_ARTICLE_PENDING = 'FETCH_ARTICLE_PENDING';
export const FETCH_ARTICLE_REJECTED = 'FETCH_ARTICLE_REJECTED';
export const FETCH_ARTICLE_FULFILLED = 'FETCH_ARTICLE_FULFILLED';

export default (id) => ({
    type: FETCH_ARTICLE,
    payload: axios.get(fetchArticleUrl + '/' + id)
});
