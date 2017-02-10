import axios from "axios";
import Properties from "../../properties";
export const fetchLinkedTagsUrl = Properties.fetchLinkedTagsUrl;

const FETCH_LINKED_TAGS = 'FETCH_LINKED_TAGS';
export const FETCH_LINKED_TAGS_PENDING = `${FETCH_LINKED_TAGS}_PENDING`;
export const FETCH_LINKED_TAGS_FULFILLED = `${FETCH_LINKED_TAGS}_FULFILLED`;
export const FETCH_LINKED_TAGS_REJECTED = `${FETCH_LINKED_TAGS}_REJECTED`;

export default (data) => ({
    type: FETCH_LINKED_TAGS,
    payload: axios.post(fetchLinkedTagsUrl, data)
});
