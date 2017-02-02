import axios from "axios";
import Properties from "../../properties";
export const saveArticleUrl = Properties.saveArticleUrl;

const SAVE_ARTICLE = 'SAVE_ARTICLE';
export const SAVE_ARTICLE_PENDING = `${SAVE_ARTICLE}_PENDING`;
export const SAVE_ARTICLE_FULFILLED = `${SAVE_ARTICLE}_FULFILLED`;
export const SAVE_ARTICLE_REJECTED = `${SAVE_ARTICLE}_REJECTED`;

export default (data) => ({
    type: SAVE_ARTICLE,
    payload: axios.post(saveArticleUrl, data)
});
