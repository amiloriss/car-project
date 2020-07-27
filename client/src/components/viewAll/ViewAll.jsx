import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getPersonQuery = gql`
  {
    persons {
      name
      age
      gender
      id
    }
  }
`;

const ViewAll = ({ data }) => {
  function displayPersons() {
    if (data.loading) {
      return <div>Loading persons...</div>;
    } else {
      return data.persons.map((person, index) => {
        return <li key={index}>{person.name}</li>;
      });
    }
  }
  return (
    <div>
      <h1>Hello</h1>
      {displayPersons()}
    </div>
  );
};

export default graphql(getPersonQuery)(ViewAll);
