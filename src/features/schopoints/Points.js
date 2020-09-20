// Fix problem with text field

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import { Card, CardTitle, CardMedia, CardText } from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import AddButton from 'material-ui/svg-icons/content/add-circle';
import RemoveButton from 'material-ui/svg-icons/content/remove-circle';
import BatchPicture from '../../assets/batch-picture.jpeg';

import Banner from '../../assets/schoPoints.png';

const schommendable = {
  width: '30%',
  textAlign: 'center'
};

const schommendableContainer = {
  paddingTop: '5%'
};

const pointsContainer = {
  width: '60%',
  textAlign: 'center'
};

const white = {
  color: 'white'
};

const red = {
  color: 'red'
};

const green = {
  color: 'green'
};

const list = {
  textAlign: 'left'
};

const schopointText = {
  fontSize: '28px'
};

const faq = {
  fontSize: '20px'
};

const faqtext = {
  fontSize: '16px',
  textAlign: 'left'
};

const faqContainer = {
  margin: '10%',
  marginTop: '5%'
};

const left = {
  float: 'left'
};

const right = {
  float: 'right'
};

const center = {
  textAlign: 'center'
};

class Points extends Component {
  componentDidMount() {
    this.props.handleGetBabies(this.props.user.studNo);
  }

  render() {
    const {
      user,
      babies,
      points,
      handleResetAllPoints,
      handleResetPoints,
      handleAddPoints,
      handleSubtractPoints,
      handleChangePoints
    } = this.props;

    if (user.type === 'SCHO' || user.type === 'SCHOHEAD') {
      return (
        <DocumentTitle title="Scho Points">
          <div className="center">
            <div className="center">
              <img src={Banner} alt="logo" />
            </div>
            <div className="schoEditorContainer">
              <Card>
                <Table selectable={false}>
                  <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}>
                    <TableRow>
                      <TableHeaderColumn>SchoBabies</TableHeaderColumn>
                      <TableHeaderColumn> </TableHeaderColumn>
                      <TableHeaderColumn style={center}>
                        Adjust Points
                      </TableHeaderColumn>
                      <TableHeaderColumn> </TableHeaderColumn>
                      <TableHeaderColumn>Total</TableHeaderColumn>
                      <TableHeaderColumn>
                        <RaisedButton
                          onClick={() => {
                            handleResetAllPoints({ schoGuardian: user.studNo });
                            this.props.handleGetBabies(this.props.user.studNo);
                          }}
                          label="RESET ALL"
                          primary={true}
                        />
                      </TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    {babies.map(baby => {
                      return (
                        <TableRow>
                          <TableRowColumn>{`${baby.firstName} ${baby.lastName}`}</TableRowColumn>
                          <TableRowColumn>
                            <IconButton iconStyle={red} style={right}>
                              <RemoveButton
                                onClick={() => {
                                  handleSubtractPoints({
                                    points: points,
                                    studNo: baby.schoBaby,
                                    schoGuardian: user.studNo
                                  });
                                  this.props.handleGetBabies(
                                    this.props.user.studNo
                                  );
                                }}
                              />
                            </IconButton>
                          </TableRowColumn>
                          <TableRowColumn>
                            <TextField
                              hintText="Points"
                              defaultValue="0"
                              value={points}
                              className="pointField"
                              onChange={event => {
                                handleChangePoints(event.target.value);
                                this.props.handleGetBabies(
                                  this.props.user.studNo
                                );
                              }}
                            />
                          </TableRowColumn>
                          <TableRowColumn>
                            <IconButton iconStyle={green} style={left}>
                              <AddButton
                                onClick={() => {
                                  handleAddPoints({
                                    points: points,
                                    studNo: baby.schoBaby,
                                    schoGuardian: user.studNo
                                  });
                                  this.props.handleGetBabies(
                                    this.props.user.studNo
                                  );
                                }}
                              />
                            </IconButton>
                          </TableRowColumn>
                          <TableRowColumn>{baby.schoPoints}</TableRowColumn>
                          <TableRowColumn>
                            <FlatButton
                              label="Reset"
                              primary={true}
                              onClick={() => {
                                handleResetPoints({
                                  studNo: baby.schoBaby
                                });
                                this.props.handleGetBabies(
                                  this.props.user.studNo
                                );
                              }}
                            />
                          </TableRowColumn>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </div>
        </DocumentTitle>
      );
    }

    return (
      <DocumentTitle title="Scho Points">
        <div className="flex left center">
          <div style={schommendable}>
            <Card style={schommendableContainer}>
              <CardTitle>
                <strong>SCHOMMENDABLE!</strong>
              </CardTitle>
              <CardMedia
                overlay={
                  <CardTitle
                    title={<span style={white}>Batch undefined</span>}
                    subtitle="GWA: 1.75"
                  />
                }
                actAsExpander="true">
                <img src={BatchPicture} alt="" />
              </CardMedia>
              <CardText>
                <strong>Jasper Arquilita:</strong> 1.75 <br />
                <strong>Clarisse Sydney Cortez:</strong> 1.75 <br />
                <strong>Alexander Custodio:</strong> 1.75 <br />
                <strong>Robert Cosuco:</strong> 1.75 <br />
                <strong>Kobe Jee de Luna:</strong> 1.75 <br />
                <strong>John Cedric Gaza:</strong> 1.75 <br />
                <strong>Michael Kenneth Mojar:</strong> 1.75 <br />
                <strong>Jake Marbert Tagnepis:</strong> 1.75 <br />
              </CardText>
            </Card>
          </div>
          <div style={pointsContainer}>
            <img src={Banner} alt="logo" />
            <br />
            <span style={schopointText}>
              <strong>{user.firstName}</strong>, you have{' '}
              <strong>{user.schoPoints}</strong> points!
            </span>
            <br />
            <div style={faqContainer}>
              <span style={faq}>
                <strong>
                  SCHOLASTICS DEPARTMENT<br />
                  SCHO POINTS SYSTEM<br />
                </strong>
              </span>

              <br />
              <hr />
              <br />
              <span style={faqtext}>
                All active YSERs will have initial 100 points at the start of
                the semester.<br />
                <br />
                A YSER earns : <br />
                <br />
                <div style={list}>
                  <strong style={green}>+</strong> 10 points if he/she passes an
                  exam. Only 10 exams will be recorded.<br />
                  <strong style={green}>+</strong> 10 points, additional to 2a,
                  if he/she belongs to Top 10 scorers of the class<br />
                  <strong style={green}>+</strong> 5 points if he/she submits an
                  exercise/requirement on time.<br />
                  <strong style={green}>+</strong> 5 points if he/she has a
                  perfect attendance in one of his/her class. <br />
                  <strong style={green}>+</strong> 2 points if he/she donates an
                  academic material to the department.<br />
                  <strong style={green}>+</strong> 10 points if he/she presents
                  his/her project milestone.<br />
                </div>
                <br />
                A YSER loses :<br />
                <br />
                <div style={list}>
                  <strong style={red}>-</strong> 10 points if he/she fails an
                  exam. <br />
                  <strong style={red}>-</strong> 10 points if he/she fails to
                  submit an exercise/requirement<br />
                  <strong style={red}>-</strong> 5 points if he/she submits an
                  exercise/requirement late.<br />
                  <strong style={red}>-</strong> 5 points if he/she fails to
                  present his/her project milestone.<br />
                </div>
                <br />
                <hr />
                Awards will be given to &lt;Top 5&gt; during end of Midterms and
                end of the Semester
                <br />
                The batch (org) with the highest average points will be awarded.<br
                />
                Other special awards will be decided by the Scholastics
                Department.
              </span>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Points;
