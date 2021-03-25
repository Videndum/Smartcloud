import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitchAuthCreateWithoutBotInput {
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
}
