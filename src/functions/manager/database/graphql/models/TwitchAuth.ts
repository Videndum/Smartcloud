import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { Bot } from "../models/Bot";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TwitchAuth {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  clientID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  twitchSecret!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sessionSecret!: string;

  Bot?: Bot[];
}
