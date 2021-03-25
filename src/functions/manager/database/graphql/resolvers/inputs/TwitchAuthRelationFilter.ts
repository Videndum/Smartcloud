import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TwitchAuthWhereInput } from "../inputs/TwitchAuthWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitchAuthRelationFilter {
  @TypeGraphQL.Field(_type => TwitchAuthWhereInput, {
    nullable: true
  })
  is?: TwitchAuthWhereInput | undefined;

  @TypeGraphQL.Field(_type => TwitchAuthWhereInput, {
    nullable: true
  })
  isNot?: TwitchAuthWhereInput | undefined;
}
