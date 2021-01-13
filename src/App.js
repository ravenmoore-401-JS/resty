import React from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";
import Form from "./form/form";
import Results from "./api-results/api-results";

import './app.scss';
import './header/header.scss';
import './form/form.scss';
import './footer/footer.scss';


 
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results:[],
    }
  }
  useApi = (results) => {
    this.setState({results})
  }
  render(){
    return(
      <>
        <Header />
        <Form 
          useApi={this.useApi}
        />
        <Results
          apiResults={this.state.results}
        />
      

        <Footer />
      </>
    )
  }
}

export default App;
