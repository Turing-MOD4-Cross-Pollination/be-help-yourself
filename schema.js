const graphql = require('graphql')
var db = require('./db');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLBoolean
} = graphql;

})

const ResourceType = new GraphQLObjectType({
    name: 'Resource',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        website: {type: GraphQLString},
        location: {type: GraphQLString},
        contact: {type: GraphQLString},
        notes: {type: GraphQLString},
        favorited: {type: GraphQLBoolean}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        resources: {
            type: new GraphQLList(ResourceType),
            resolve(parents, args){
                return db('resources').select()
            }
        }
    }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})