import React from 'react';

import './history-box.scss';


class HistoryBox extends React.Component{
  
  render(){
    console.log('history from main', this.props.history)
    return(
      <div id='history-box'>
        <h3>API Hit History</h3>
        <ul>
          {this.props.history.map((item,idx) =>
            <ol key={idx}> 
              <li > {idx +1} {item.method} {item.url}</li>
            </ol>
          )}
        </ul>         
      </div>
    )
  }
}
export default HistoryBox;