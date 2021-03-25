import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TransactionCreateWithoutPatInput } from "../inputs/TransactionCreateWithoutPatInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionCreateOrConnectWithoutpatInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionCreateWithoutPatInput, {
    nullable: false
  })
  create!: TransactionCreateWithoutPatInput;
}
