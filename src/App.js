import React from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";
import Form from "./form/form";
import Results from "./api-results/api-results";

import './app.scss';
import './header/header.scss';

import './footer/footer.scss';


 
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results:[],
      headers:{},
      display: false
    }
  }
  useApi = (results) => {
    this.setState({results})
  }
  collectHeaders = (headers) => {
    console.log('App got the Headers!!!', headers)
    this.setState({display:true})
    this.setState({ headers });

  }
  render(){
    return(
      <>
        <Header />
        <Form 
          useApi={this.useApi}
          giveAppTheHeaders={this.collectHeaders}
        />
        {!this.state.display ? '':
        <Results
          apiHeaders={this.state.headers}
          apiResults={this.state.results}
        />
        }
      

        <Footer />
      </>
    )
  }
}

export default App;
