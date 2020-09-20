// Change format to lessen white space and maximize space
// Other scho should not be able to delete announcements of other scho

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { List, ListItem } from 'material-ui/List';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'material-ui/svg-icons/content/clear';
import PostIcon from 'material-ui/svg-icons/content/send';
import DatePicker from 'material-ui/DatePicker';

const titleSize = {
  fontSize: 20
};

const hintLeft = {
  textAlign: 'left',
  width: '80%'
};
const hintLeft2 = {
  textAlign: 'left',
  width: '65%'
};

class Home extends Component {
  componentDidMount() {
    this.props.handleGetAnnouncements();
    this.props.handleGetDates();
  }

  render() {
    const {
      user,

      announcements,
      dates,
      announcementHeading,
      announcementContent,
      eventTitle,
      eventDate,

      handleChangeAnnouncementC,
      handleChangeAnnouncementH,
      handleChangeEventTitle,
      handleChangeEventDate,
      handleCreateAnnouncement,
      handleRemoveAnnouncement,
      handleCreateDate,
      handleRemoveDate
    } = this.props;

    if (user.type === 'SCHO' || user.type === 'SCHOHEAD') {
      return (
        <DocumentTitle title="Home">
          <div>
            <h1 className="headerNoPadding">
              <span className="normalWeight"> Welcome,</span> {user.firstName}
              <span className="normalWeight">!</span>{' '}
            </h1>
            <h1 className="headerNoPadding">
              {' '}
              <span className="normalWeight">You are logged in as </span>
              {user.type}
              <span className="normalWeight">!</span>{' '}
            </h1>
            <br />

            <div className="flex">
              <Card className="containerHome">
                <CardTitle title="Announcements" />
                <Divider />
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    if (announcementHeading && announcementContent) {
                      let studNo = user.studNo;
                      handleCreateAnnouncement({
                        heading: announcementHeading,
                        content: announcementContent,
                        studNo: studNo
                      });
                    }
                  }}>
                  <div>
                    <TextField
                      hintText="Heading"
                      value={announcementHeading}
                      style={hintLeft}
                      onChange={event => {
                        handleChangeAnnouncementH(event.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <TextField
                      style={hintLeft}
                      hintText="Message"
                      multiLine={true}
                      value={announcementContent}
                      onChange={event => {
                        handleChangeAnnouncementC(event.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <FlatButton
                      type="submit"
                      label="Post"
                      icon={<PostIcon />}
                    />
                  </div>
                </form>
                <List className="noMargin">
                  {announcements.map(announcement => {
                    return (
                      <div>
                        <Divider />
                        <div className="alignRight">
                          <IconButton
                            tooltip={`Delete`}
                            tooltipPosition="top-center"
                            onClick={() =>
                              handleRemoveAnnouncement(announcement.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </div>
                        <ListItem disabled={true}>
                          <div className="justify">
                            <CardTitle
                              title={announcement.heading}
                              subtitle={announcement.time_created}
                              titleStyle={titleSize}
                            />
                            <CardText>{announcement.content}</CardText>
                          </div>
                          <CardText className="alignRight">
                            {`${announcement.lastName}, ${announcement.firstName}`}
                          </CardText>
                        </ListItem>
                      </div>
                    );
                  })}
                </List>
              </Card>

              <Card className="containerDate">
                <CardTitle title="Dates to Remember" />
                <Divider />
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    if (eventTitle && eventDate) {
                      handleCreateDate({
                        event_title: eventTitle,
                        event_date: eventDate
                      });
                    }
                  }}>
                  <div>
                    <TextField
                      hintText="Title"
                      value={eventTitle}
                      style={hintLeft2}
                      onChange={event => {
                        handleChangeEventTitle(event.target.value);
                      }}
                    />
                    <br />

                    <DatePicker
                      value={eventDate}
                      hintText="Date"
                      mode="landscape"
                      onChange={(event, date) => {
                        handleChangeEventDate(date);
                      }}
                    />
                  </div>
                  <br />
                  <FlatButton type="submit" label="Post" icon={<PostIcon />} />
                </form>

                <List className="noMargin">
                  <Divider />
                  {dates.map(date => {
                    return (
                      <div>
                        <div className="alignRight">
                          <IconButton
                            tooltip={`Delete`}
                            tooltipPosition="top-center"
                            onClick={() => handleRemoveDate(date.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </div>
                        <ListItem disabled={true}>
                          <CardTitle
                            title={date.event_title}
                            subtitle={date.event_date}
                            titleStyle={titleSize}
                          />
                        </ListItem>
                      </div>
                    );
                  })}
                </List>
              </Card>
            </div>
          </div>
        </DocumentTitle>
      );
    }
    return (
      <DocumentTitle title="Home">
        <div>
          <h1 className="headerNoPadding">
            <span className="normalWeight"> Welcome,</span> {user.firstName}
            <span className="normalWeight">!</span>{' '}
          </h1>
          <h1 className="headerNoPadding">
            {' '}
            <span className="normalWeight">You are logged in as </span>
            {user.type}
            <span className="normalWeight">!</span>{' '}
          </h1>
          <br />

          <div className="flex">
            <Card className="containerHome">
              <CardTitle title="Announcements" />
              <List className="noMargin">
                {announcements.map(announcement => {
                  return (
                    <div>
                      <Divider />
                      <ListItem disabled={true}>
                        <div className="justify">
                          <CardTitle
                            title={announcement.heading}
                            subtitle={announcement.time_created}
                            titleStyle={titleSize}
                          />
                          <CardText>{announcement.content}</CardText>
                        </div>
                        <CardText className="alignRight">
                          {`${announcement.firstName} ${announcement.lastName}`}
                        </CardText>
                      </ListItem>
                    </div>
                  );
                })}
              </List>
            </Card>

            <br />

            <Card className="containerDate">
              <CardTitle title="Dates to Remember" />
              <List className="noMargin">
                {dates.map(date => {
                  return (
                    <ListItem disabled={true}>
                      <CardTitle
                        title={date.event_title}
                        subtitle={date.event_date}
                        titleStyle={titleSize}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Card>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
