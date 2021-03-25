import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TransactionCreateWithoutResponsibleManagerInput } from "../inputs/TransactionCreateWithoutResponsibleManagerInput";
import { TransactionUpdateWithoutResponsibleManagerInput } from "../inputs/TransactionUpdateWithoutResponsibleManagerInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionUpsertWithWhereUniqueWithoutResponsibleManagerInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionUpdateWithoutResponsibleManagerInput, {
    nullable: false
  })
  update!: TransactionUpdateWithoutResponsibleManagerInput;

  @TypeGraphQL.Field(_type => TransactionCreateWithoutResponsibleManagerInput, {
    nullable: false
  })
  create!: TransactionCreateWithoutResponsibleManagerInput;
}
