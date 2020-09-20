import { connect } from 'react-redux';
import Home from './Home';

import {
  changeAnnouncementC,
  changeAnnouncementH,
  changeEventTitle,
  changeEventDate,
  getAnnouncements,
  createAnnouncement,
  removeAnnouncement,
  getDates,
  createDate,
  removeDate
} from './duck';

const mapStateToProps = state => {
  const { user } = state.auth;
  const {
    announcements,
    dates,
    announcementHeading,
    announcementContent,
    eventTitle,
    eventDate
  } = state.home;

  return {
    user,
    announcements,
    dates,
    announcementHeading,
    announcementContent,
    eventTitle,
    eventDate
  };
};
const mapDispatchToProps = dispatch => ({
  handleChangeAnnouncementH: content => {
    dispatch(changeAnnouncementH(content));
  },
  handleChangeAnnouncementC: content => {
    dispatch(changeAnnouncementC(content));
  },
  handleChangeEventTitle: content => {
    dispatch(changeEventTitle(content));
  },
  handleChangeEventDate: content => {
    dispatch(changeEventDate(content));
  },
  handleGetAnnouncements: () => {
    dispatch(getAnnouncements());
  },
  handleCreateAnnouncement: details => {
    dispatch(createAnnouncement(details));
  },
  handleRemoveAnnouncement: id => {
    dispatch(removeAnnouncement(id));
  },
  handleGetDates: () => {
    dispatch(getDates());
  },
  handleCreateDate: details => {
    dispatch(createDate(details));
  },
  handleRemoveDate: id => {
    dispatch(removeDate(id));
  }
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
