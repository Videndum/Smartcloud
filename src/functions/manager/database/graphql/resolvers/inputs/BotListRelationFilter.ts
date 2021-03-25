import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotWhereInput } from "../inputs/BotWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotListRelationFilter {
  @TypeGraphQL.Field(_type => BotWhereInput, {
    nullable: true
  })
  every?: BotWhereInput | undefined;

  @TypeGraphQL.Field(_type => BotWhereInput, {
    nullable: true
  })
  some?: BotWhereInput | undefined;

  @TypeGraphQL.Field(_type => BotWhereInput, {
    nullable: true
  })
  none?: BotWhereInput | undefined;
}
