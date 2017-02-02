import axios from "axios";
import Properties from "../../properties";
export const acceptRssEntryUrl = Properties.acceptRssEntryUrl;

const ACCEPT_RSS_ENTRY = 'ACCEPT_RSS_ENTRY';
export const ACCEPT_RSS_ENTRY_PENDING = `${ACCEPT_RSS_ENTRY}_PENDING`;
export const ACCEPT_RSS_ENTRY_FULFILLED = `${ACCEPT_RSS_ENTRY}_FULFILLED`;
export const ACCEPT_RSS_ENTRY_REJECTED = `${ACCEPT_RSS_ENTRY}_REJECTED`;

export default (data) => ({
    type: ACCEPT_RSS_ENTRY,
    payload: axios.post(acceptRssEntryUrl, data)
});
