import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TwitchUserWhereInput } from "../inputs/TwitchUserWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitchUserRelationFilter {
  @TypeGraphQL.Field(_type => TwitchUserWhereInput, {
    nullable: true
  })
  is?: TwitchUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => TwitchUserWhereInput, {
    nullable: true
  })
  isNot?: TwitchUserWhereInput | undefined;
}
