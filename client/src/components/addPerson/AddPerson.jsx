import React, { Component } from 'react';
import './AddPerson.scss';

class AddPerson extends Component {
  render() {
    return (
      <div className="add-person-wrapper">
        <h2 className="sub-title">Add New Person</h2>
        <form className="add-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-wrapper">
            <label htmlFor="">name:</label>
            <input type="text" placeholder="enter the name..." />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">age:</label>
            <input type="text" placeholder="enter the age..." />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">gender:</label>
            <input type="text" placeholder="enter the gender..." />
          </div>
          <button>add person</button>
        </form>
      </div>
    );
  }
}

export default AddPerson;
