const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
} = require('graphql');
const _ = require('lodash');

const persons = [{ name: 'Dasha', age: 20, gender: 'male' }];
const cars = [{ model: 'BMW', color: 'black' }];

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: () => ({
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    gender: { type: GraphQLString },
  }),
});

const CarType = new GraphQLObjectType({
  name: 'Cars',
  fields: () => ({
    model: { type: GraphQLString },
    color: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    persons: {
      type: PersonType,
      resolve(parent, args) {
        return _.find(persons);
      },
    },
    cars: {
      type: CarType,
      resolve(parent, args) {
        return _.find(cars);
      },
    },
    person: {
      type: PersonType,
      args: {
        name: { type: GraphQLString },
      },
      resolve(parent, args) {
        return _.find();
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
