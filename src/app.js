const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { PORT } = require('./config')

/**modulos de grapqhl */
const expressGrapqhl = require('express-graphql')
const { importSchema } = require('graphql-import')
const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('../graphql/resolvers')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


/**construccion del schema */


const typeDefs = importSchema('./graphql/schema.graphql')
const schemadev = makeExecutableSchema({ typeDefs, resolvers })



/**construyendo la ruta */

app.use('/', expressGrapqhl({
    schema: schemadev,
    graphiql: true
}))


app.listen(PORT, () => console.log(`listening app on port: ${PORT}`.alert))