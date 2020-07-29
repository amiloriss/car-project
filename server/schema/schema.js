const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLID,
} = require('graphql');

const Person = require('./../models/person');

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    gender: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    persons: {
      type: GraphQLList(PersonType),
      resolve(parent, args) {
        return Person.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutatuion',
  fields: () => ({
    addPerson: {
      type: PersonType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        gender: { type: GraphQLString },
      },
      resolve(parent, args) {
        let person = new Person({
          name: args.name,
          age: args.age,
          gender: args.gender,
        });
        return person.save();
      },
    },
  }),
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
