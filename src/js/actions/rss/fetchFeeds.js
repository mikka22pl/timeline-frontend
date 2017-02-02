import axios from "axios";
import Properties from "../../properties";
export const fetchRssFeedsUrl = Properties.fetchRssFeedsUrl;

const FETCH_RSS_FEEDS = 'FETCH_RSS_FEEDS';
export const FETCH_RSS_FEEDS_PENDING = 'FETCH_RSS_FEEDS_PENDING';
export const FETCH_RSS_FEEDS_REJECTED = 'FETCH_RSS_FEEDS_REJECTED';
export const FETCH_RSS_FEEDS_FULFILLED = 'FETCH_RSS_FEEDS_FULFILLED';

export default () => ({
    type: FETCH_RSS_FEEDS,
    payload: axios.get(fetchRssFeedsUrl)
});
