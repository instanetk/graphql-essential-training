import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        email: String
    }

    enum Gender {
        MALE
        FEMALE
        NONBINARY
        OTHER
    }

    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        email: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`);

export default schema;
