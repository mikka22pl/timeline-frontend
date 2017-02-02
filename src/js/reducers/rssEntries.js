import {
    FETCH_RSS_ENTRIES_PENDING,
    FETCH_RSS_ENTRIES_FULFILLED,
    FETCH_RSS_ENTRIES_REJECTED
} from "../actions/rss/fetchEntries";
import {
    ACCEPT_RSS_ENTRY_PENDING,
    ACCEPT_RSS_ENTRY_FULFILLED,
    ACCEPT_RSS_ENTRY_REJECTED
} from "../actions/rss/acceptDraftEntry";

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

    default:
      return state;
  }
}
