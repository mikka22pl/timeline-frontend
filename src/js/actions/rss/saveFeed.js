import axios from "axios";
import Properties from "../../properties";
export const saveFeedUrl = Properties.saveFeedUrl;

const SAVE_RSS_FEED = 'SAVE_RSS_FEED';
export const SAVE_RSS_FEED_PENDING = `${SAVE_RSS_FEED}_PENDING`;
export const SAVE_RSS_FEED_FULFILLED = `${SAVE_RSS_FEED}_FULFILLED`;
export const SAVE_RSS_FEED_REJECTED = `${SAVE_RSS_FEED}_REJECTED`;

export default (data) => ({
    type: SAVE_RSS_FEED,
    payload: axios.post(saveFeedUrl, data)
});
