import axios from "axios";
import Properties from "../../properties";
export const fetchTimelineUrl = Properties.fetchTimelineUrl;

const FETCH_TIMELINE = 'FETCH_TIMELINE';
export const FETCH_TIMELINE_PENDING = 'FETCH_TIMELINE_PENDING';
export const FETCH_TIMELINE_REJECTED = 'FETCH_TIMELINE_REJECTED';
export const FETCH_TIMELINE_FULFILLED = 'FETCH_TIMELINE_FULFILLED';

export default (id) => ({
    type: FETCH_TIMELINE,
    payload: axios.get(fetchTimelineUrl + '/' + id)
});
