import React, { Component } from 'react';
import './AddPerson.scss';
import _ from 'lodash';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getPersonQuery = gql`
  {
    persons {
      name
      age
      gender
    }
  }
`;

const addPersonMutation = gql`
  mutation AddPerson($name: String!, $age: Int!, $gender: String!) {
    addPerson(name: $name, age: $age, gender: $gender) {
      name
      age
      gender
    }
  }
`;

class AddPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
      gender: '',
    };
  }

  submitForm(e) {
    e.preventDefault();
    if (
      this.state.name === '' ||
      this.state.age === 0 ||
      (this.state.gender !== 'male' && this.state.gender !== 'female')
    ) {
    } else {
      this.props.addPersonMutation({
        variables: {
          name: this.state.name,
          age: this.state.age,
          gender: this.state.gender,
        },
      });
    }
  }

  render() {
    return (
      <div className="add-person-wrapper">
        <h2 className="sub-title">Add New Person</h2>
        <form className="add-form" onSubmit={this.submitForm.bind(this)}>
          <div className="input-wrapper">
            <label htmlFor="">name:</label>
            <input
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
              type="text"
              placeholder="enter the name..."
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">age:</label>
            <input
              onChange={(e) => {
                this.setState({ age: +e.target.value });
              }}
              type="number"
              placeholder="enter the age..."
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">gender:</label>
            <select
              onChange={(e) => {
                this.setState({ gender: e.target.value });
              }}
            >
              <option selected disabled>
                select gender
              </option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
          <button type="submit">add person</button>
        </form>
      </div>
    );
  }
}

export default _.flowRight(
  graphql(getPersonQuery, { name: 'getPersonQuery' }),
  graphql(addPersonMutation, { name: 'addPersonMutation' })
)(AddPerson);
