import _ from 'lodash';
import {
    FETCH_RSS_FEEDS_PENDING,
    FETCH_RSS_FEEDS_FULFILLED,
    FETCH_RSS_FEEDS_REJECTED
} from "../actions/rss/fetchFeeds";
import {
  SAVE_RSS_FEED_PENDING,
  SAVE_RSS_FEED_FULFILLED,
  SAVE_RSS_FEED_REJECTED
} from '../actions/rss/saveFeed';
import {
    LOAD_RSS_DRAFT_ENTRIES_PENDING,
    LOAD_RSS_DRAFT_ENTRIES_FULFILLED,
    LOAD_RSS_DRAFT_ENTRIES_REJECTED
} from "../actions/rss/loadDraftEntries";

export const initialState = {
    fetching: false,
    records: [],
    errors: []
};

export default function (state = initialState, action) {
  switch (action.type) {

    /********* FETCHING ************/
    case FETCH_RSS_FEEDS_PENDING:
    {
      return {...state, errors: [], fetching: true};
    }

    case FETCH_RSS_FEEDS_REJECTED:
    {
      return {...state, errors: action.payload, fetching: false};
    }

    case FETCH_RSS_FEEDS_FULFILLED:
    {
      return {...state, records: action.payload.data, fetching: false};
    }

    case SAVE_RSS_FEED_PENDING:
    {
      // action.payload.data <- id new element
      return {...state, fetching: true};
    }

    case SAVE_RSS_FEED_FULFILLED:
    {
      const records = state.records.concat([action.payload.data]);
      return {...state, records: records, fetching: false};
    }

    /********* LOADING ************/
    case LOAD_RSS_DRAFT_ENTRIES_PENDING:
    {
      return {...state, loading: true};
    }

    case LOAD_RSS_DRAFT_ENTRIES_REJECTED:
    {
      return {...state, errors: action.payload, loading: false};
    }

    case LOAD_RSS_DRAFT_ENTRIES_FULFILLED:
    {
      const { id, loadedCount } = action.payload.data;
      const index = _.findIndex(state.records, (o) => o.id == id);

      return {
        ...state,
        records: [
          ...state.records.slice(0, index),
          {
            ...state.records[index],
            loadedCount: loadedCount
          },
          ...state.records.slice(index + 1)
        ],
        loading: false
      };
    }

    default:
      return state;
  }
}
