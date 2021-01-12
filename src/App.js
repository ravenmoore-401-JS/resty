import React from 'react';
import Header from "./header";
import Footer from "./footer";
import Form from "./form";

import './header.scss';
import './app.scss';
import './form.scss';
import './footer.scss';

class App extends React.Component {
  render(){
    return(
      <>
        <Header />
        <body>
          <Form />
        </body>

        <Footer />
      </>
    )
  }
}

export default App;
