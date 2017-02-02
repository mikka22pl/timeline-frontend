import {
    FETCH_TIMELINE_PENDING,
    FETCH_TIMELINE_FULFILLED,
    FETCH_TIMELINE_REJECTED
} from "../actions/timeline/fetchTimeline";

export const initialState = {
    fetching: false,
    saving: false,
    records: [],
    errors: []
};

export default function (state = initialState, action) {
  switch (action.type) {

    /********* FETCHING ************/
    case FETCH_TIMELINE_PENDING:
    {
      return {...state, errors: [], fetching: true};
    }

    case FETCH_TIMELINE_REJECTED:
    {
      return {...state, errors: action.payload, fetching: false};
    }

    case FETCH_TIMELINE_FULFILLED:
    {
      return {...state, records: action.payload.data, fetching: false};
    }

    default:
      return state;
  }
}
