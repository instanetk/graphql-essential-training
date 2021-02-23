import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL is amazing!');
});

const friendDatabase = {};

class Friend {
  constructor(id, { firstName, lastName, gender, email }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
  }
}

const root = {
  friend: () => {
    return {
      id: 123456789,
      firstName: 'David',
      lastName: 'Quintero',
      gender: 'male',
      email: 'davidq@gmail.com',
    };
  },
  createFriend: ({ input }) => {
    let id = require('crypto').randomBytes(10).toString('hex');
    friendDatabase[id] = input;
    return new Friend(id, input);
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8080, () => console.log('Running on localhost:8080/graphql'));
