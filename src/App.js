import React from 'react';
import Header from "./header";
import Footer from "./footer";

import './header.scss';
import './app.scss';
import './footer.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: '',
      message: 'Type a url andselect a REST Type:',
      restType: ''
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
    let type = e.target.value;
    this.setState({ restType: type });
  }

  render(){
    return(
      <>
        <Header />
        <body>
          <fieldset>
          <form >
            URL: <input onChange={this.handleInput}/>            
            
          </form>
          <div>
          <button onClick={this.handleType} value='GET'>GET</button>
          <button onClick={this.handleType} value='POST'>POST</button>
          <button onClick={this.handleType} value='PUT'>PUT</button>
          <button onClick={this.handleType} value='DELETE'>DELETE</button>

          </div>
            <button onClick={this.handleMessage} type='submit'>GO!</button>
          </fieldset>
          


          <div>
            <p>{this.state.message} </p>
          
          </div>

        </body>

        <Footer />
      </>
    )
  }
}

export default App;
