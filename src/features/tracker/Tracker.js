// Complete this functionality

import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import DocumentTitle from 'react-document-title';

import '../../chartist.css';
import Banner from '../../assets/comingSoon.png';

class Tracker extends Component {
  updateCheck() {
    this.setState(oldState => {
      return {
        checked: !oldState.checked
      };
    });
  }
  state = {
    checked: false
  };
  render() {
    const biPolarBarChartData = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]]
    };
    var biPolarBarChartOptions = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };

    return (
      <DocumentTitle title="Org Tracker">
        <div>
          <div className="center">
            <img src={Banner} alt="logo" />
          </div>
          <div className="flex">
            <div className="graph">
              <ChartistGraph
                data={biPolarBarChartData}
                options={biPolarBarChartOptions}
                type={'Line'}
              />
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Tracker;
