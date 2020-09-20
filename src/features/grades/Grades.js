// Some parts are not in redux yet
// Add edit option for grades

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import { Card, CardTitle } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import AddBoxIcon from 'material-ui/svg-icons/content/add-box';
import DeleteIcon from 'material-ui/svg-icons/content/delete-sweep';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const selectStyle = {
  color: '#0B3C5D'
};

const header1 = {
  fontSize: 40,
  paddingTop: 20,
  paddingLeft: 20,
  paddingRight: 20
};

const header2 = {
  fontSize: 70
};

const header3 = {
  fontSize: 30
};

class Grades extends Component {
  constructor(props) {
    super(props);
    this.state = { value2: 0, value3: 0 };
    this.props.handleGetGWA(this.props.user.studNo);
    this.props.handleGetGrades(this.props.user.studNo);
  }
  handleChange2 = (event, index, value2) => this.setState({ value2 });
  handleChange3 = (event, index, value3) => this.setState({ value3 });
  render() {
    const {
      grades,
      currentGWA,
      addSem,
      selectAY,
      selectSem,
      selectGrade,
      enterSubject,
      enterUnits,
      errorText,

      handleGradeArr,
      handleChangeAcadYear,
      handleChangeSem,
      handleChangeSubject,
      handleChangeUnits,
      handleChangeGrade,
      handleChangeErrorText,
      handleDeleteGrade
    } = this.props;
    return (
      <DocumentTitle title="Grades">
        <div className="flex">
          <div className="containerLeft">
            <Card>
              <CardTitle title="Your GWA is" titleStyle={header1} />
              <CardTitle title={currentGWA} titleStyle={header2} />
            </Card>
            <br />
            <Card>
              <CardTitle title="Add Semester" titleStyle={header3} />
              <div className="justify">
                <div className="center">
                  <TextField
                    value={selectAY}
                    hintText="Enter Academic Year"
                    onChange={event => {
                      handleChangeAcadYear(event.target.value);
                    }}
                  />
                  <DropDownMenu
                    selectedMenuItemStyle={selectStyle}
                    value={this.state.value2}
                    onChange={(event, index, value2) => {
                      this.handleChange2(event, index, value2);
                      handleChangeSem(value2);
                    }}>
                    <MenuItem value={0} primaryText="Select Semester" />
                    <MenuItem
                      value={'1st Semester'}
                      primaryText="1st Semester"
                    />
                    <MenuItem
                      value={'2nd Semester'}
                      primaryText="2nd Semester"
                    />
                    <MenuItem value={'Midyear'} primaryText="Midyear" />
                  </DropDownMenu>
                </div>
                <Table selectable={false} expandable={true}>
                  {addSem.length ? (
                    <TableHeader
                      adjustForCheckbox={false}
                      displaySelectAll={false}>
                      <TableRow>
                        <TableHeaderColumn>Course</TableHeaderColumn>
                        <TableHeaderColumn>Units</TableHeaderColumn>
                        <TableHeaderColumn>Numerical Grade </TableHeaderColumn>
                        <TableHeaderColumn width={50}> </TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                  ) : null}
                  <TableBody displayRowCheckbox={false}>
                    {addSem.map(grade => {
                      return (
                        <TableRow>
                          <TableRowColumn>{grade.subject}</TableRowColumn>
                          <TableRowColumn>{grade.units}</TableRowColumn>
                          <TableRowColumn>{grade.grade}</TableRowColumn>
                          <TableRowColumn width={100} />
                        </TableRow>
                      );
                    })}
                    <TableRow>
                      <TableRowColumn>
                        <TextField
                          value={enterSubject}
                          hintText="Enter Subject"
                          onChange={event => {
                            handleChangeSubject(event.target.value);
                          }}
                        />
                      </TableRowColumn>
                      <TableRowColumn>
                        <TextField
                          value={enterUnits}
                          hintText="Enter Units"
                          onChange={event => {
                            handleChangeUnits(event.target.value);
                          }}
                        />
                      </TableRowColumn>
                      <TableRowColumn>
                        <DropDownMenu
                          selectedMenuItemStyle={selectStyle}
                          value={this.state.value3}
                          onChange={(event, index, value3) => {
                            this.handleChange3(event, index, value3);
                            handleChangeGrade(value3);
                          }}
                          className="noPadding"
                          maxHeight={200}>
                          <MenuItem value={0} primaryText="Select Grade" />
                          <MenuItem value={1} primaryText="1.00" />
                          <MenuItem value={1.25} primaryText="1.25" />
                          <MenuItem value={1.5} primaryText="1.50" />
                          <MenuItem value={1.75} primaryText="1.75" />
                          <MenuItem value={2} primaryText="2.00" />
                          <MenuItem value={2.25} primaryText="2.25" />
                          <MenuItem value={2.5} primaryText="2.50" />
                          <MenuItem value={2.75} primaryText="2.75" />
                          <MenuItem value={3} primaryText="3.00" />
                          <MenuItem value={4} primaryText="4.00" />
                          <MenuItem value={5} primaryText="5.00" />
                        </DropDownMenu>
                      </TableRowColumn>
                      <TableRowColumn width={50}>
                        <IconButton
                          onClick={event => {
                            if (!enterSubject || enterSubject.length > 10) {
                              handleChangeErrorText('Subject input is invalid');
                            } else if (
                              !enterUnits ||
                              enterUnits % 1 !== 0 ||
                              enterUnits > 20 ||
                              isNaN(enterUnits)
                            ) {
                              handleChangeErrorText('Units input is invalid');
                            } else if (!selectGrade) {
                              handleChangeErrorText('Please input a grade');
                            } else {
                              handleGradeArr(
                                addSem.concat([
                                  {
                                    subject: enterSubject,
                                    units: enterUnits,
                                    grade: selectGrade
                                  }
                                ])
                              );
                              handleChangeSubject('');
                              handleChangeGrade(0);
                              handleChangeUnits('');
                              // eslint-disable-next-line
                              this.state.value3 = 0;
                              handleChangeErrorText('');
                            }
                          }}>
                          <AddIcon />
                        </IconButton>
                      </TableRowColumn>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <br />
              <div class="gradeError">{errorText}</div>
              <br />
              <FlatButton
                label="Add Semester"
                icon={<AddBoxIcon />}
                onClick={event => {
                  if (!selectAY.match(/20\d\d\s?-\s?20\d\d/)) {
                    handleChangeErrorText(
                      'Academic Year is not in the format 20xx-20xx'
                    );
                  } else if (!selectSem) {
                    handleChangeErrorText('Please input a Semester');
                  } else {
                    const thisTemp = this;
                    addSem.forEach(function(grade) {
                      thisTemp.props.handlePostGrade({
                        studNo: thisTemp.props.user.studNo,
                        subject: grade.subject,
                        grade: grade.grade,
                        units: grade.units,
                        acadYear: selectAY,
                        semester: selectSem
                      });
                    });
                    handleGradeArr([]);
                    handleChangeSubject('');
                    handleChangeGrade(0);
                    handleChangeUnits('');
                    handleChangeAcadYear('');
                    handleChangeSem(0);
                    // eslint-disable-next-line
                    this.state.value2 = 0;
                    // eslint-disable-next-line
                    this.state.value3 = 0;
                    handleChangeErrorText('');
                    this.props.handleGetGWA(this.props.user.studNo);
                    this.props.handleGetGrades(this.props.user.studNo);
                  }
                }}
              />
            </Card>
          </div>
          <Card className="containerGrades">
            {grades.map(grade => {
              return (
                <Card>
                  {grade.semesters.map(semArray => {
                    return (
                      <Card>
                        <CardTitle
                          title={`${semArray.semester} ${grade.acadYear}`}
                          actAsExpander={true}
                          showExpandableButton={true}
                        />

                        <Table selectable={false} expandable={true}>
                          <TableHeader
                            adjustForCheckbox={false}
                            displaySelectAll={false}>
                            <TableRow>
                              <TableHeaderColumn>Course</TableHeaderColumn>
                              <TableHeaderColumn>Units</TableHeaderColumn>
                              <TableHeaderColumn>
                                Numerical Grade{' '}
                              </TableHeaderColumn>
                              <TableHeaderColumn width={100}>
                                {' '}
                              </TableHeaderColumn>
                            </TableRow>
                          </TableHeader>
                          <TableBody displayRowCheckbox={false}>
                            {semArray.subjects.map(subj => {
                              return (
                                <TableRow>
                                  <TableRowColumn>
                                    {subj.subject}
                                  </TableRowColumn>
                                  <TableRowColumn>{subj.units}</TableRowColumn>
                                  <TableRowColumn>{subj.grade}</TableRowColumn>
                                  <TableRowColumn width={100}>
                                    <IconButton
                                      onClick={event => {
                                        handleDeleteGrade(subj.id);
                                        this.props.handleGetGWA(
                                          this.props.user.studNo
                                        );
                                        this.props.handleGetGrades(
                                          this.props.user.studNo
                                        );
                                      }}>
                                      <DeleteIcon />
                                    </IconButton>
                                  </TableRowColumn>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </Card>
                    );
                  })}
                </Card>
              );
            })}
          </Card>
        </div>
      </DocumentTitle>
    );
  }
}

export default Grades;
