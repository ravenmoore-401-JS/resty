import React from 'react';

import './history-box.scss';


class HistoryBox extends React.Component{
  render(){
    return(
      <div id='history-box'>
        <h3>API RESULTS</h3>
        <span data-testId='historyWindow'>
          <h5>type</h5>
          <p>{this.props.restType} </p>
          <h5>url</h5>
          <p>{this.props.url}</p>
          <h5>body</h5>
      
        </span>
      </div>
    )
  }
}
export default HistoryBox;