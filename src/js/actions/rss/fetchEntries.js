import axios from "axios";
import Properties from "../../properties";
export const fetchRssEntriesUrl = Properties.fetchRssDraftEntriesUrl;

const FETCH_RSS_ENTRIES = 'FETCH_RSS_ENTRIES';
export const FETCH_RSS_ENTRIES_PENDING = 'FETCH_RSS_ENTRIES_PENDING';
export const FETCH_RSS_ENTRIES_REJECTED = 'FETCH_RSS_ENTRIES_REJECTED';
export const FETCH_RSS_ENTRIES_FULFILLED = 'FETCH_RSS_ENTRIES_FULFILLED';

export default (id) => ({
    type: FETCH_RSS_ENTRIES,
    payload: axios.get(fetchRssEntriesUrl + '/' + id)
});
