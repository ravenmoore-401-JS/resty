import React from 'react';

import './form.scss';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url: '',
      message: 'Type a url andselect a REST Type:',
      restType: '',
      needsBody: false,
      needsId: false,
      body: {},
      id: ''
    }
  }
  handleInput= e =>{
    let input = e.target.value;
    this.setState({url: input})
  }
  handleBody = e =>{
    let body = e.target.value;
    console.log(body)
    this.setState({body})
  }
  handleId = e =>{
    let id = e.target.value;
    this.setState({id})
  }
  
  handleMessage = e => {
      e.preventDefault();
      let output = `${this.state.restType} : ${this.state.url}/${this.state.body}`;
      this.setState({ message: output });
  }

  handleType = e => {
    e.preventDefault();
    let restType = e.target.value;
    if (restType === 'POST'){
      this.setState({needsBody: true})
      this.setState({ restType});
      //use user in put in box for body query fo fetch
    }
    if (restType === 'PUT'){
      this.setState({needsBody: true})
      this.setState({ restType});
      //use user in put in box for body query fo fetch
    }
    if (restType === 'GET'){
      this.setState({needsId: true})
      this.setState({ restType});
      //use user in put in box for body query fo fetch
    }
    if (restType === 'DELETE'){
      this.setState({needsId: true})
      this.setState({ restType});
      //use user in put in box for body query fo fetch
    }
  }


  hitApi = async (e) =>{
    const url = this.state.url;
    console.log('url:', this.state.url,'method:',this.state.restType)

    try{
      var apiFetch = await fetch(url, {method: this.state.restType ||'get', mode : 'cors'})
 
    }catch(err){
      console.error(err)
    }

    try{
      let apiData = await apiFetch.json();
      let headers = {};

      for(let headerPair of apiFetch.headers.entries()){
        headers[headerPair[0]]=headerPair[1];
      }
      console.log(headers)
      this.props.giveAppTheHeaders(headers)

      this.props.useApi(apiData)
    }catch(err){
      console.error(err);
    }

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
            {!this.state.needsBody ? false :
              <div id='body'>
                <input onChange={this.handleBody} type='text' id='body' placeholder='body info' name='body'/>
              </div>
            }
            {!this.state.needsId ? false:
            <div id='id'>
              <input id='id' onChange={this.handleId} placeholder='id info' name="id"/>
            </div>
            }


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




