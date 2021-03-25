import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotWhereInput } from "../inputs/BotWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotRelationFilter {
  @TypeGraphQL.Field(_type => BotWhereInput, {
    nullable: true
  })
  is?: BotWhereInput | undefined;

  @TypeGraphQL.Field(_type => BotWhereInput, {
    nullable: true
  })
  isNot?: BotWhereInput | undefined;
}
