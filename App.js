import React, {Component} from 'react';
import {Image} from 'react-native-elements';
import Login from './page/Login';
import Home from './page/Home';
import {NativeRouter, Switch, Route} from 'react-router-native';

class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </NativeRouter>
    );
  }
}

export default App;