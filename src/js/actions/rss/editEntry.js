import axios from "axios";
import Properties from "../../properties";
export const saveEntryUrl = Properties.saveEntryUrl;

const RSS_EDIT_ENTRY = 'RSS_EDIT_ENTRY';
export const RSS_EDIT_ENTRY_PENDING = `${RSS_EDIT_ENTRY}_PENDING`;
export const RSS_EDIT_ENTRY_FULFILLED = `${RSS_EDIT_ENTRY}_FULFILLED`;
export const RSS_EDIT_ENTRY_REJECTED = `${RSS_EDIT_ENTRY}_REJECTED`;
export const RSS_ENTRY_FORM_OPEN = 'RSS_ENTRY_FORM_OPEN';
export const RSS_ENTRY_FORM_CLOSE = 'RSS_ENTRY_FORM_CLOSE';
export const RSS_ENTRY_FORM_READ = 'RSS_ENTRY_FORM_READ';
export const RSS_ENTRY_RESET_FORM = 'RSS_ENTRY_RESET_FORM';

export default (data) => ({
    type: RSS_EDIT_ENTRY,
    payload: axios.post(saveEntryUrl, data)
});
export const readForEdit = (data) => ({
  type: RSS_ENTRY_FORM_READ,
  payload: data
})
export const openForm = () => ({
    type: RSS_ENTRY_FORM_OPEN,
    payload: true
});
export const closeForm = () => ({
    type: RSS_ENTRY_FORM_CLOSE,
    payload: false
});
export const resetEntry = () => ({
  type: RSS_ENTRY_RESET_FORM
});
