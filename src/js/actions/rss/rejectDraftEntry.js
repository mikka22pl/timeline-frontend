import axios from "axios";
import Properties from "../../properties";
export const rejectRssEntryUrl = Properties.rejectRssEntryUrl;

const REJECT_RSS_ENTRY = 'REJECT_RSS_ENTRY';
export const REJECT_RSS_ENTRY_PENDING = `${REJECT_RSS_ENTRY}_PENDING`;
export const REJECT_RSS_ENTRY_FULFILLED = `${REJECT_RSS_ENTRY}_FULFILLED`;
export const REJECT_RSS_ENTRY_REJECTED = `${REJECT_RSS_ENTRY}_REJECTED`;

export default (data) => ({
    type: REJECT_RSS_ENTRY,
    payload: axios.post(rejectRssEntryUrl, data)
});
