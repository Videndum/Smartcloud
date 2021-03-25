import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateWithoutTransactionInput } from "../inputs/ManagerCreateWithoutTransactionInput";
import { ManagerUpdateWithoutTransactionInput } from "../inputs/ManagerUpdateWithoutTransactionInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpsertWithoutTransactionInput {
  @TypeGraphQL.Field(_type => ManagerUpdateWithoutTransactionInput, {
    nullable: false
  })
  update!: ManagerUpdateWithoutTransactionInput;

  @TypeGraphQL.Field(_type => ManagerCreateWithoutTransactionInput, {
    nullable: false
  })
  create!: ManagerCreateWithoutTransactionInput;
}
