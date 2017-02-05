import {
    FETCH_RSS_ENTRIES_PENDING,
    FETCH_RSS_ENTRIES_FULFILLED,
    FETCH_RSS_ENTRIES_REJECTED
} from "../actions/rss/fetchEntries";
import {
    FETCH_RSS_DRAFT_ENTRIES_PENDING,
    FETCH_RSS_DRAFT_ENTRIES_FULFILLED,
    FETCH_RSS_DRAFT_ENTRIES_REJECTED
} from "../actions/rss/fetchDraftEntries";
import {
    ACCEPT_RSS_ENTRY_PENDING,
    ACCEPT_RSS_ENTRY_FULFILLED,
    ACCEPT_RSS_ENTRY_REJECTED
} from "../actions/rss/acceptDraftEntry";
import {
    REJECT_RSS_ENTRY_PENDING,
    REJECT_RSS_ENTRY_FULFILLED,
    REJECT_RSS_ENTRY_REJECTED
} from "../actions/rss/rejectDraftEntry";
import {
    RSS_EDIT_ENTRY_PENDING,
    RSS_EDIT_ENTRY_FULFILLED,
    RSS_EDIT_ENTRY_REJECTED
} from "../actions/rss/editEntry";

export const initialState = {
    fetching: false,
    records: [],
    errors: []
};

export default function (state = initialState, action) {
  switch (action.type) {

    /********* FETCHING ************/
    case FETCH_RSS_ENTRIES_PENDING:
    {
      return {...state, errors: [], fetching: true};
    }

    case FETCH_RSS_ENTRIES_REJECTED:
    {
      return {...state, errors: action.payload, fetching: false};
    }

    case FETCH_RSS_ENTRIES_FULFILLED:
    {
      return {...state, records: action.payload.data, fetching: false};
    }

    /********* FETCHING DRAFTS ************/
    case FETCH_RSS_DRAFT_ENTRIES_PENDING:
    {
      return {...state, errors: [], fetching: true};
    }

    case FETCH_RSS_DRAFT_ENTRIES_REJECTED:
    {
      return {...state, errors: action.payload, fetching: false};
    }

    case FETCH_RSS_DRAFT_ENTRIES_FULFILLED:
    {
      return {...state, records: action.payload.data, fetching: false};
    }


    /*********** ACCEPT DRAFT *************/
    case ACCEPT_RSS_ENTRY_PENDING:
    {
      return {...state, fetching: true};
    }

    case ACCEPT_RSS_ENTRY_FULFILLED:
    {
      const newArray = state.records.filter((item) => {
        return item.link != action.payload.data.link;
      });
      return {...state, records: newArray, fetching: false};
    }

    /*********** REJECT DRAFT *************/
    case REJECT_RSS_ENTRY_PENDING:
    {
      return {...state, fetching: true};
    }

    case REJECT_RSS_ENTRY_FULFILLED:
    {
      const newArray = state.records.filter((item) => {
        return item.link != action.payload.data.link;
      });
      return {...state, records: newArray, fetching: false};
    }

    /*********** EDIT ENTRY *************/
    case RSS_EDIT_ENTRY_PENDING:
    {
      return {...state, fetching: true};
    }

    case RSS_EDIT_ENTRY_FULFILLED:
    {
      const index = _.findIndex(state.records, (o) => o.id == action.payload.data.id);

      const records = [
        ...state.records.slice(0, index),
        action.payload.data,
        ...state.records.slice(index + 1)
      ];
      return {...state, records: records, fetching: false};
    }

    default:
      return state;
  }
}
