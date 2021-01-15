import React from 'react';
import ReactJson from 'react-json-view';

import './api-results.scss';

class Results extends React.Component{
  render(){
    return(
      <div id='apiResults'>
        <h3>API RESULTS</h3>
        <span data-testId='reslutsWindow'>
          <h5>Headers</h5>
          <ReactJson src={this.props.apiHeaders}></ReactJson>
          <h5>Results</h5>
          <ReactJson src={this.props.apiResults}></ReactJson>
        </span>
      </div>
    )
  }
}
export default Results;