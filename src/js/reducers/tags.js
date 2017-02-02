import {
    FETCH_TAGS_PENDING,
    FETCH_TAGS_FULFILLED,
    FETCH_TAGS_REJECTED
} from "../actions/tags/fetchTags";

export const initialState = {
    fetching: false,
    saving: false,
    records: [],
    errors: []
};

export default function (state = initialState, action) {
  switch (action.type) {

    /********* FETCHING ************/
    case FETCH_TAGS_PENDING:
    {
      return {...state, errors: [], fetching: true};
    }

    case FETCH_TAGS_REJECTED:
    {
      return {...state, errors: action.payload, fetching: false};
    }

    case FETCH_TAGS_FULFILLED:
    {
      return {...state, records: action.payload.data, fetching: false};
    }

    default:
      return state;
  }
}
