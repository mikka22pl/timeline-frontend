import {
    RSS_ENTRY_FORM_OPEN,
    RSS_ENTRY_FORM_CLOSE,
    RSS_ENTRY_FORM_READ,
    RSS_EDIT_ENTRY_PENDING,
    RSS_ENTRY_RESET_FORM
} from "../actions/rss/editEntry";

const initialState = {
  openForm: false,
  value: {}
}

export default function (state = initialState, action) {
  switch (action.type) {

    /********* EDIT FORM ************/
    case RSS_ENTRY_FORM_OPEN:
    case RSS_ENTRY_FORM_CLOSE:
    {
      return {...state, openForm: action.payload};
    }

    case RSS_ENTRY_FORM_READ:
    {
      const value = {...action.payload, date: action.payload.pubDate};
      return {...state, value: value };
    }

    case RSS_ENTRY_RESET_FORM:
    {
      return {...state, value: initialState.value, openForm: initialState.openForm};
    }

    default:
      return state;
  }
}
