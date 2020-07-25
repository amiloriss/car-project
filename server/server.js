const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

mongoose.connect(
  'mongodb+srv://georgyy:123georgyy123@cluster0.o4cea.mongodb.net/carsproject?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true }
);

mongoose.connection.once('open', () => {
  console.log('has been connected to database');
});

app.listen(PORT, () => {
  console.log('server has been started on PORT: ' + PORT);
});
