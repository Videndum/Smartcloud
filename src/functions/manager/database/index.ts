import 'reflect-metadata'
import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server-cloud-functions'
import { buildSchemaSync } from 'type-graphql'
import { resolvers } from './graphql'

/**
 * Background Cloud Function to access the GraphQL API for database actions
 *
 * @param {object} message The Pub/Sub message.
 * @param {object} context The event metadata.
 */

const prisma = new PrismaClient()
const schema = buildSchemaSync({
    resolvers,
    validate: false
})
const server = new ApolloServer({
    schema,
    playground: true,
    introspection: true,
    context: () => ({ prisma })
})

export const handler = server.createHandler()
