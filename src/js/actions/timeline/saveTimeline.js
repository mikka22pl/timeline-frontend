import axios from "axios";
import Properties from "../../properties";
export const saveTimelineUrl = Properties.saveTimelineUrl;

const SAVE_TIMELINE = 'SAVE_TIMELINE';
export const SAVE_TIMELINE_PENDING = `${SAVE_TIMELINE}_PENDING`;
export const SAVE_TIMELINE_FULFILLED = `${SAVE_TIMELINE}_FULFILLED`;
export const SAVE_TIMELINE_REJECTED = `${SAVE_TIMELINE}_REJECTED`;

export default (data) => ({
    type: SAVE_TIMELINE,
    payload: axios.post(saveTimelineUrl, data)
});
