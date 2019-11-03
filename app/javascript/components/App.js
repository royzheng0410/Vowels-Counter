import React, {Component} from "react";
import Home from "./Home/Home";
import Header from "./Home/Header";
import History from "./TextItem/History"
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/history' component={History} />
        </Switch>
        
      </div>
    )
  }
}

export default App