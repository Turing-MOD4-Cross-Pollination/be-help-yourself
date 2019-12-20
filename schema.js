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

const ResourceType = new GraphQLObjectType({
    name: 'Resource',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        website: {type: GraphQLString},
        street: {type: GraphQLString},
        city: {type: GraphQLString},
        state: {type: GraphQLString},
        zip_code: {type: GraphQLString},
        contact: {type: GraphQLString},
        notes: {type: GraphQLString},
        category: {type: GraphQLString},
        subcategory: {type: GraphQLString},
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
        },
        resource: {
            type: ResourceType,
            args: {id: {type: GraphQLID}},
            resolve(parents, args) {
              return db('resources').where('id', args.id).first()
            }
          },
        resources_by_category: {
          type: new GraphQLList(ResourceType),
          args: {category: {type: GraphQLString}},
          resolve(parent, args){
            return db('resources').where('category', args.category).select()
          }
        },
        resources_by_city: {
          type: new GraphQLList(ResourceType),
          args: {city: {type: GraphQLString}},
          resolve(parent, args){
            return db('resources').where('city', args.city).select()
          }
        },
        resources_by_zip_code: {
          type: new GraphQLList(ResourceType),
          args: {zip_code: {type: GraphQLString}},
          resolve(parent, args){
            return db('resources').where('zip_code', args.zip_code).select()
          }
        },
        resources_by_subcategory: {
          type: new GraphQLList(ResourceType),
          args: {subcategory: {type: GraphQLString}},
          resolve(parent, args){
            return db('resources').where('subcategory', args.subcategory).select()
          }
        },
        resources_by_favorited: {
          type: new GraphQLList(ResourceType),
          args: {favorited: {type: GraphQLBoolean}},
          resolve(parent, args){
            return db('resources').where('favorited', args.favorited).select()
          }
        },
        resources_by_notes: {
          type: new GraphQLList(ResourceType),
          args: {notes: {type: GraphQLString}
          },
          resolve(parent, args) {
            return db('resources').where('notes', 'like', `%${args.notes}%`)
          }
        }
    }
})

// knex raw("select * from 'resources'  where notes contains 'STRING QUERY ARG

module.exports = new GraphQLSchema({
  query: RootQuery
})
