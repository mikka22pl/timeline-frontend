import axios from "axios";
import Properties from "../../properties";
export const fetchTimelinesUrl = Properties.fetchTimelinesUrl;

const FETCH_TIMELINES = 'FETCH_TIMELINES';
export const FETCH_TIMELINES_PENDING = 'FETCH_TIMELINES_PENDING';
export const FETCH_TIMELINES_REJECTED = 'FETCH_TIMELINES_REJECTED';
export const FETCH_TIMELINES_FULFILLED = 'FETCH_TIMELINES_FULFILLED';

export default () => ({
    type: FETCH_TIMELINES,
    payload: axios.get(fetchTimelinesUrl)
});
