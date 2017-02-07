import editEntry, { openForm, closeForm, readForEdit, resetEntry } from './editEntry';
import fetchFeeds from './fetchFeeds';
import fetchEntries from './fetchEntries';
import fetchDraftEntries from './fetchDraftEntries';
import loadDraftEntries from './loadDraftEntries';
import saveFeed from './saveFeed';
import acceptDraftEntry from './acceptDraftEntry';
import rejectDraftEntry from './rejectDraftEntry';

export default {
  editEntry,
  openForm,
  closeForm,
  loadDraftEntries,
  readForEdit,
  resetEntry,
  fetchFeeds,
  fetchEntries,
  fetchDraftEntries,
  saveFeed,
  acceptDraftEntry,
  rejectDraftEntry
};
