import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TransactionWhereInput } from "../inputs/TransactionWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionListRelationFilter {
  @TypeGraphQL.Field(_type => TransactionWhereInput, {
    nullable: true
  })
  every?: TransactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => TransactionWhereInput, {
    nullable: true
  })
  some?: TransactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => TransactionWhereInput, {
    nullable: true
  })
  none?: TransactionWhereInput | undefined;
}
