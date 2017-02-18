import axios from "axios";
import Properties from "../../properties";
export const fetchArticlesByTagsUrl = Properties.fetchArticlesByTagsUrl;

const SEARCH_ARTICLES = 'SEARCH_ARTICLES';
export const SEARCH_ARTICLES_PENDING = 'SEARCH_ARTICLES_PENDING';
export const SEARCH_ARTICLES_REJECTED = 'SEARCH_ARTICLES_REJECTED';
export const SEARCH_ARTICLES_FULFILLED = 'SEARCH_ARTICLES_FULFILLED';

export default (tags) => ({
    type: SEARCH_ARTICLES,
    payload: axios.post(fetchArticlesByTagsUrl, tags)
});
