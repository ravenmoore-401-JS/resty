import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from "../components/form/form";
import HistoryBox from "../components/history-box/history-box";
import Results from "../components/api-results/api-results";
import History from "../history-route/history";
import Help from "../help-route/help";
import If from '../components/If/if';


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      results:[],
      headers:{},
      display: false,
      history:[]
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
  saveHisory = (history) => {
    console.log('history', history);
  }

  render(){
    return (
      <div id="main">
        <h3>Main</h3>
        <Switch>
          <Route exact path="/">
            <Form 
            useApi={this.useApi}
            giveAppTheHeaders={this.collectHeaders}
            />
            <If condition={this.state.display}>
              <Results
                apiHeaders={this.state.headers}
                apiResults={this.state.results}
              />
            </If>
            <If condition={this.state.history}>
              <HistoryBox 
                history ={this.state.history}  
              />
            </If>
          </Route>

          <Route path="/history">
            <History>
              {this.state.history}
            </History>
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route>
            <div>404</div>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default Main;
