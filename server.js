import express from 'express'
import bodyParser from 'body-parser'
import {apolloExpress, graphiqlExpress} from 'apollo-server'

import {makeExecutableSchema} from 'graphql-tools'

const PORT = 3000

var app = express()

import Schema from './schema.js'
import Resolvers from './resolvers.js'

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
})

app.use('/graphql', bodyParser.json(), apolloExpress({
	schema: executableSchema
}))

app.use('/graphiql', graphiqlExpress({
	endpointURL: '/graphql'
}))

app.listen(PORT, () => {
	console.log('API http://localhost:' + PORT + '/graphql')
	console.log('GraphIQL http://localhost:' + PORT + '/graphiql')
})
