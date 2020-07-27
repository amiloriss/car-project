const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLID,
} = require('graphql');

const Person = require('./../models/person');
const Car = require('./../models/car');

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    gender: { type: GraphQLString },
    cars: {
      type: new GraphQLList(CarType),
      resolve(parent, args) {
        return Car.find({ carId: parent.id });
      },
    },
  }),
});

const CarType = new GraphQLObjectType({
  name: 'Car',
  fields: () => ({
    id: { type: GraphQLID },
    model: { type: GraphQLString },
    color: { type: GraphQLString },
    person: {
      type: PersonType,
      resolve(parent, args) {
        return Person.findById(parent.personId);
      },
    },
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
    cars: {
      type: GraphQLList(CarType),
      resolve(parent, args) {
        return Car.find({});
      },
    },
    person: {
      type: PersonType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Car.findById(args.id);
      },
    },
    car: {
      type: CarType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Car.findById(args.id);
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
        carId: { type: GraphQLID },
      },
      resolve(parent, args) {
        let person = new Person({
          name: args.name,
          age: args.age,
          gender: args.gender,
          carId: args.carId,
        });
        return person.save();
      },
    },
    addCar: {
      type: CarType,
      args: {
        model: { type: GraphQLString },
        color: { type: GraphQLString },
      },
      resolve(parent, args) {
        let car = new Car({
          model: args.model,
          color: args.color,
        });
        return car.save();
      },
    },
  }),
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
