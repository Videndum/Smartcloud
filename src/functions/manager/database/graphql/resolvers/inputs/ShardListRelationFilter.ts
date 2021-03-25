import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ShardWhereInput } from "../inputs/ShardWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShardListRelationFilter {
  @TypeGraphQL.Field(_type => ShardWhereInput, {
    nullable: true
  })
  every?: ShardWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShardWhereInput, {
    nullable: true
  })
  some?: ShardWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShardWhereInput, {
    nullable: true
  })
  none?: ShardWhereInput | undefined;
}
