import {
    FETCH_TIMELINES_PENDING,
    FETCH_TIMELINES_FULFILLED,
    FETCH_TIMELINES_REJECTED
} from "../actions/timeline/fetchTimelines";
import {
  SAVE_TIMELINE_PENDING,
  SAVE_TIMELINE_FULFILLED,
  SAVE_TIMELINE_REJECTED
} from '../actions/timeline/saveTimeline';

export const initialState = {
    fetching: false,
    saving: false,
    options: [],
    records: [],
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
      return {...state, records: action.payload.data, options: data, fetching: false};
    }

    /********* SAVING ************/
    case SAVE_TIMELINE_PENDING:
    {
      return {...state, saving: true};
    }
    case SAVE_TIMELINE_REJECTED:
    {
      return {...state, errors: action.payload, saving: false};
    }
    case SAVE_TIMELINE_FULFILLED:
    {
      return {
        ...state,
        records: state.records.concat(action.payload.data),
        saving: false
      };
    }

    default:
      return state;
  }
}
