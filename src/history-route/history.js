import React from "react";

class History extends React.Component{
  render(){
    return(
      <ul>
        {this.props.children}
      </ul>
    )
  }
}

export default History;
