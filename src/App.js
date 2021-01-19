import React from 'react';
import { BrowserRouter, MemoryRouter, HashRouter, Link } from 'react-router-dom';
import Header from "./header/header";
import Footer from "./footer/footer";
import Main from "./main/main";

import './app.scss';
 
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
