import axios from "axios";
import Properties from "../../properties";
export const loadRssEntriesUrl = Properties.loadRssEntriesUrl;

const LOAD_RSS_DRAFT_ENTRIES = 'LOAD_RSS_DRAFT_ENTRIES';
export const LOAD_RSS_DRAFT_ENTRIES_PENDING = 'LOAD_RSS_DRAFT_ENTRIES_PENDING';
export const LOAD_RSS_DRAFT_ENTRIES_REJECTED = 'LOAD_RSS_DRAFT_ENTRIES_REJECTED';
export const LOAD_RSS_DRAFT_ENTRIES_FULFILLED = 'LOAD_RSS_DRAFT_ENTRIES_FULFILLED';

export default (feedId) => ({
    type: LOAD_RSS_DRAFT_ENTRIES,
    payload: axios.get(loadRssEntriesUrl + '/' + feedId)
});
