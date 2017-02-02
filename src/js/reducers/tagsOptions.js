import {
    FETCH_TAGS_PENDING,
    FETCH_TAGS_FULFILLED,
    FETCH_TAGS_REJECTED
} from "../actions/tags/fetchTags";
import _ from 'lodash';

export const initialState = {
    fetching: false,
    saving: false,
    options: [],
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
      const data = action.payload.data.map((item) => {
        return {value: item.id, label: item.name};
      });
      // const tagsOptionsData = _.memoize(() => data);
      return {...state, options: data, fetching: false};
    }

    default:
      return state;
  }
}
