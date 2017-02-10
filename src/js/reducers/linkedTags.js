import {
    FETCH_LINKED_TAGS_PENDING,
    FETCH_LINKED_TAGS_FULFILLED,
    FETCH_LINKED_TAGS_REJECTED
} from "../actions/tags/fetchLinkedTags";

export const initialState = {
    fetching: false,
    records: [],
    errors: []
};

export default function (state = initialState, action) {
  switch (action.type) {

    /********* FETCHING ************/
    case FETCH_LINKED_TAGS_PENDING:
    {
      return {...state, errors: [], fetching: true};
    }

    case FETCH_LINKED_TAGS_REJECTED:
    {
      return {...state, errors: action.payload, fetching: false};
    }

    case FETCH_LINKED_TAGS_FULFILLED:
    {
      return {...state, records: action.payload.data, fetching: false};
    }

    default:
      return state;
  }
}
