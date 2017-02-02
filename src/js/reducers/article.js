import {
    FETCH_ARTICLE_PENDING,
    FETCH_ARTICLE_FULFILLED,
    FETCH_ARTICLE_REJECTED
} from "../actions/articles/fetchArticle";
import {
    SAVE_ARTICLE_PENDING,
    SAVE_ARTICLE_FULFILLED,
    SAVE_ARTICLE_REJECTED
} from "../actions/articles/saveArticle";

export const initialState = {
    fetching: false,
    saving: false,
    value: {
        id: 0,
    },
    errors: []
};

export default function (state = initialState, action) {
  switch (action.type) {

    /********* FETCHING ************/
    case FETCH_ARTICLE_PENDING:
    {
      return {...state, errors: [], fetching: true};
    }

    case FETCH_ARTICLE_REJECTED:
    {
      return {...state, errors: action.payload, fetching: false};
    }

    case FETCH_ARTICLE_FULFILLED:
    {
      const value = {
        ...state.value,
        ...action.payload.data
      };
      return {...state, value: value, fetching: false};
    }

    /********* SAVING ************/
    case SAVE_ARTICLE_PENDING:
    {
      return {...state, saving: true, errors: []};
    }

    case SAVE_ARTICLE_REJECTED:
    {
      return {...state, errors: action.payload.response, saving: false};
    }

    case SAVE_ARTICLE_FULFILLED:
    {
      const value = {
          ...state.value,
          id: null
      };
      return {...state, saving:false, value:value, errors:[]};
    }

    default:
      return state;
  }
}
