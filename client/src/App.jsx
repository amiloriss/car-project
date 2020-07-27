import React, { Component } from 'react';
import Menu from './components/menu/Menu';
import { Route } from 'react-router-dom';
import Information from './components/information/Information';
import AddCar from './components/addCar/AddCar';
import AddPerson from './components/addPerson/AddPerson';
import ViewAll from './components/viewAll/ViewAll';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="app-wrapper">
          <Route path="/addperson" component={AddPerson} />
          <Route path="/addcar" component={AddCar} />
          <Route path="/viewall" component={ViewAll} />
          <Route path="/info" component={Information} />
        </div>
      </div>
    );
  }
}

export default App;
