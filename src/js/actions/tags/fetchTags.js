import axios from "axios";
import Properties from "../../properties";
export const fetchTagsUrl = Properties.fetchTagsUrl;

const FETCH_TAGS = 'FETCH_TAGS';
export const FETCH_TAGS_PENDING = 'FETCH_TAGS_PENDING';
export const FETCH_TAGS_REJECTED = 'FETCH_TAGS_REJECTED';
export const FETCH_TAGS_FULFILLED = 'FETCH_TAGS_FULFILLED';

export default () => ({
    type: FETCH_TAGS,
    payload: axios.get(fetchTagsUrl)
});
