import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ActionWhereInput } from "../inputs/ActionWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActionListRelationFilter {
  @TypeGraphQL.Field(_type => ActionWhereInput, {
    nullable: true
  })
  every?: ActionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActionWhereInput, {
    nullable: true
  })
  some?: ActionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActionWhereInput, {
    nullable: true
  })
  none?: ActionWhereInput | undefined;
}
