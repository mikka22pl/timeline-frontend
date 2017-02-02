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

    default:
      return state;
  }
}
