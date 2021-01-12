import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url: '',
      message: 'Type a url andselect a REST Type:',
      restType: '',
      display: false,
    }
  }
  handleInput= e =>{
    let input = e.target.value;
    this.setState({url: input})
  }
  handleMessage = e => {
      e.preventDefault();
      let output = `${this.state.restType} : ${this.state.url}`;
      this.setState({ message: output });
      if(this.state.url !== '' && this.state.restType !== ''){this.setState({display: true })}
  }

  handleType = e => {
    e.preventDefault();
    let restType = e.target.value;
    this.setState({ restType});
  }
  render(){
    return(
      <div id='form'>
        <form >
          URL: <input onChange={this.handleInput}/>     
          <div onClick={this.handleType}>
            <button value='GET'>GET</button>
            <button value='POST'>POST</button>
            <button value='PUT'>PUT</button>
            <button value='DELETE'>DELETE</button>
          </div>
           <button onClick={this.handleMessage} type='submit'>GO!</button> 
        </form>
      
      {!this.state.display ? "" : 
      
      <div id='message'>
      <p>{this.state.message} </p>
      </div>
      }
    </div>
    )
  }
}
export default Form;




