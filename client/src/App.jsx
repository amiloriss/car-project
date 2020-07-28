import React, { Component } from 'react';
import './App.scss';
import Menu from './components/menu/Menu';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Route, Switch } from 'react-router-dom';
import Information from './components/information/Information';
import AddCar from './components/addCar/AddCar';
import AddPerson from './components/addPerson/AddPerson';
import ViewAll from './components/viewAll/ViewAll';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

class App extends Component {
  state = {
    isOpen: false,
  };
  isOpenHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container-app">
          <div className="menu-wrapper">
            <Menu
              isOpen={this.state.isOpen}
              isOpenHandler={this.isOpenHandler}
            />
          </div>
          <div className="app-wrapper">
            <Switch>
              <Route path="/addperson" component={AddPerson} />
              <Route path="/addcar" component={AddCar} />
              <Route path="/viewall" component={ViewAll} />
              <Route path="/" component={Information} />
            </Switch>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
