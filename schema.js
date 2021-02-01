const graphql = require('graphql')
const axios = require('axios')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
} = graphql

const items = new GraphQLObjectType({
    name: 'items',
        fields: {
          id: { type: GraphQLString },
          sku: { type: GraphQLString },
          product_name: { type: GraphQLString },
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      user: { 
        type: items, 
        args: { id: { type: GraphQLString } },
        resolve(args) {
           return axios.get(`http://localhost:3000/items/${args.id}`)
                       .then(response => response.data)
        }
      }
    } 
 })

 module.exports = new GraphQLSchema({
    query: RootQuery
})