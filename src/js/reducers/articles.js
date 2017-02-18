import {
    FETCH_ARTICLES_PENDING,
    FETCH_ARTICLES_FULFILLED,
    FETCH_ARTICLES_REJECTED
} from "../actions/articles/fetchArticles";
import {
    SEARCH_ARTICLES_PENDING,
    SEARCH_ARTICLES_FULFILLED,
    SEARCH_ARTICLES_REJECTED
} from "../actions/articles/searchArticles";

export const initialState = {
    fetching: false,
    records: [],
    errors: []
};

export default function (state = initialState, action) {
  switch (action.type) {

    /********* FETCHING ************/
    case FETCH_ARTICLES_PENDING:
    {
      return {...state, errors: [], fetching: true};
    }

    case FETCH_ARTICLES_REJECTED:
    {
      return {...state, errors: action.payload, fetching: false};
    }

    case FETCH_ARTICLES_FULFILLED:
    {
      return {...state, records: action.payload.data, fetching: false};
    }

    /********** SEARCHING ***********/
    case SEARCH_ARTICLES_PENDING:
    {
      return {...state, errors: [], fetching: true};
    }

    case SEARCH_ARTICLES_REJECTED:
    {
      return {...state, errors: action.payload, fetching: false};
    }

    case SEARCH_ARTICLES_FULFILLED:
    {
      return {...state, records: action.payload.data, fetching: false};
    }

    default:
      return state;
  }
}
