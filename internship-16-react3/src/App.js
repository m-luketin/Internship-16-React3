import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import TitlePage from './components/TitlePage';
import AnimalList from './components/AnimalList';
import AnimalDetails from './components/AnimalDetails';

class App extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={TitlePage}/>
            <Route exact path='/cats' render={(props) => <AnimalList {...props} species='cats' />} />
            <Route exact path='/dogs' render={(props) => <AnimalList {...props} species='dogs' />} />
            <Route exact path='/cats/:id' render={(props) => <AnimalDetails {...props} species='cats'/>} />
            <Route exact path='/dogs/:id' render={(props) => <AnimalDetails {...props} species='dogs'/>} />
            <Route exact path='/404' render={TitlePage}></Route>
            <Redirect to='/404' />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
