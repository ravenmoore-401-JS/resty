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
  }

  handleType = e => {
    e.preventDefault();
    let restType = e.target.value;
    this.setState({ restType});
  }

  hitApi = async (e) =>{
    const url = this.state.url;
    console.log('url:', this.state.url,'method:',this.state.restType)

    const apiFetch = await fetch(url, {method: `${this.state.restType}`, mode : 'cors'})
    .then(response => {
      if(response.status !== 200)return;
      return response.json()
    });
    console.log(apiFetch.results)
    this.props.useApi(apiFetch.results)
  }

  render(){
    return(
      <div id='form'>
        <form >
          <h4>URL:</h4> <input onChange={this.handleInput}/>     
          <div onClick={this.handleType}>
            <button value='GET'>GET</button>
            <button value='POST'>POST</button>
            <button value='PUT'>PUT</button>
            <button value='DELETE'>DELETE</button>
          </div>
           <span data-testid='go-button'>  <button onClick={this.handleMessage} type='submit'>GO!</button> </span> 
        </form>
      
    
      
      <div id='UrlDisplay'>
        <p data-testid='message1'>{this.state.message} </p>
      <button onClick={this.hitApi}>Hit The API route?</button>
      
      </div>
    
    </div>
    )
  }
}

export default Form;




