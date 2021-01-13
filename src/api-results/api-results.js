import React from 'react';
import ReactJson from 'react-json-view';

class Results extends React.Component{
  render(){
    return(
      <div id='apiResults'>
        <h3>API RESULTS</h3>
        <span data-testId='reslutsWindow'><ReactJson src={this.props.apiResults}></ReactJson></span>
      </div>
    )
  }
}
export default Results;