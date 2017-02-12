import {
    FETCH_TIMELINES_PENDING,
    FETCH_TIMELINES_FULFILLED,
    FETCH_TIMELINES_REJECTED
} from "../actions/timeline/fetchTimelines";

export const initialState = {
    fetching: false,
    saving: false,
    options: [],
    errors: []
};

export default function (state = initialState, action) {
  switch (action.type) {

    /********* FETCHING ************/
    case FETCH_TIMELINES_PENDING:
    {
      return {...state, errors: [], fetching: true};
    }

    case FETCH_TIMELINES_REJECTED:
    {
      return {...state, errors: action.payload, fetching: false};
    }

    case FETCH_TIMELINES_FULFILLED:
    {
      const data = action.payload.data.map((item) => {
        return {value: item.id, label: item.name};
      });
      return {...state, options: data, fetching: false};
    }

    default:
      return state;
  }
}
