import * as Api from '../../api';
import { handle } from 'redux-pack';

const GET_ANNOUNCEMENTS = 'HOME/GET_ANNOUNCEMENTS';
const CREATE_ANNOUNCEMENT = 'HOME/CREATE_ANNOUNCEMENT';
const REMOVE_ANNOUNCEMENT = 'HOME/REMOVE_ANNOUNCEMENT';

const GET_DATES = 'HOME/GET_DATES';
const CREATE_DATE = 'HOME/CREATE_DATE';
const REMOVE_DATE = 'HOME/REMOVE_DATE';

const CHANGE_ANNOUNCEMENT_C = 'HOME/CHANGE_ANNOUNCEMENT_C';
const CHANGE_ANNOUNCEMENT_H = 'HOME/CHANGE_ANNOUNCEMENT_H';
const CHANGE_EVENT_TITLE = 'HOME/CHANGE_EVENT_TITLE';
const CHANGE_EVENT_DATE = 'HOME/CHANGE_EVENT_DATE';

export const changeAnnouncementH = content => {
  return {
    type: CHANGE_ANNOUNCEMENT_H,
    payload: content
  };
};

export const changeAnnouncementC = content => {
  return {
    type: CHANGE_ANNOUNCEMENT_C,
    payload: content
  };
};

export const changeEventTitle = content => {
  return {
    type: CHANGE_EVENT_TITLE,
    payload: content
  };
};

export const changeEventDate = content => {
  return {
    type: CHANGE_EVENT_DATE,
    payload: content
  };
};

export const getAnnouncements = () => {
  return {
    type: GET_ANNOUNCEMENTS,
    promise: Api.getAnnouncements()
  };
};

export const createAnnouncement = details => {
  return {
    type: CREATE_ANNOUNCEMENT,
    promise: Api.createAnnouncement(details)
  };
};

export const removeAnnouncement = id => {
  return {
    type: REMOVE_ANNOUNCEMENT,
    promise: Api.removeAnnouncement(id)
  };
};

export const getDates = () => {
  return {
    type: GET_DATES,
    promise: Api.getDates()
  };
};

export const createDate = details => {
  return {
    type: CREATE_DATE,
    promise: Api.createDate(details)
  };
};

export const removeDate = id => {
  return {
    type: REMOVE_DATE,
    promise: Api.removeDate(id)
  };
};

// Initial State
const initialState = {
  announcements: [],
  dates: [],

  announcementHeading: '',
  announcementContent: '',
  eventTitle: '',
  eventDate: null
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_ANNOUNCEMENT_C:
      return {
        ...state,
        announcementContent: payload
      };

    case CHANGE_ANNOUNCEMENT_H:
      return {
        ...state,
        announcementHeading: payload
      };

    case CHANGE_EVENT_TITLE:
      return {
        ...state,
        eventTitle: payload
      };

    case CHANGE_EVENT_DATE:
      return {
        ...state,
        eventDate: payload
      };

    case GET_ANNOUNCEMENTS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          announcements: payload.data.data
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case GET_DATES:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          dates: payload.data.data
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case CREATE_ANNOUNCEMENT:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          announcements: payload.data.data,
          announcementContent: '',
          announcementHeading: ''
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case CREATE_DATE:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          dates: payload.data.data,
          eventTitle: '',
          eventDate: ''
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case REMOVE_ANNOUNCEMENT:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          announcements: payload.data.data
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    case REMOVE_DATE:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState,
          dates: payload.data.data
        }),
        finish: prevState => ({
          ...prevState
        })
      });

    default:
      return state;
  }
};

export default reducer;
