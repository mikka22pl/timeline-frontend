import axios from "axios";
import Properties from "../../properties";
export const fetchRssDraftEntriesUrl = Properties.fetchRssDraftEntriesUrl;

const FETCH_RSS_DRAFT_ENTRIES = 'FETCH_RSS_DRAFT_ENTRIES';
export const FETCH_RSS_DRAFT_ENTRIES_PENDING = 'FETCH_RSS_DRAFT_ENTRIES_PENDING';
export const FETCH_RSS_DRAFT_ENTRIES_REJECTED = 'FETCH_RSS_DRAFT_ENTRIES_REJECTED';
export const FETCH_RSS_DRAFT_ENTRIES_FULFILLED = 'FETCH_RSS_DRAFT_ENTRIES_FULFILLED';

export default (id) => ({
    type: FETCH_RSS_DRAFT_ENTRIES,
    payload: axios.get(fetchRssDraftEntriesUrl + '/' + id)
});
