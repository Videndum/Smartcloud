import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TransactionCreateWithoutResponsibleManagerInput } from "../inputs/TransactionCreateWithoutResponsibleManagerInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionCreateOrConnectWithoutresponsibleManagerInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionCreateWithoutResponsibleManagerInput, {
    nullable: false
  })
  create!: TransactionCreateWithoutResponsibleManagerInput;
}
