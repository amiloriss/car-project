import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import './ViewAll.scss';

const getPersonQuery = gql`
  {
    persons {
      name
      age
      gender
    }
  }
`;

const ViewAll = ({ data }) => {
  function displayPersons() {
    if (data.loading) {
      return <div>Loading persons...</div>;
    } else {
      return data.persons.map((person, index) => {
        const { name, age, gender } = person;
        return (
          <li className="item" key={index}>
            <div className="item-wrapper">
              <div className="name">{name}</div>
              <div className="age">
                {name} is {age} years old.
              </div>
              <div className="gender">Gender is {gender}.</div>
            </div>
          </li>
        );
      });
    }
  }
  return (
    <div>
      <h2 className="sub-title">This all persons you can see.</h2>
      <ul className="list">{displayPersons()}</ul>
    </div>
  );
};

export default graphql(getPersonQuery)(ViewAll);
