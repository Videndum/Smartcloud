import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PATCreateWithoutTransactionInput } from "../inputs/PATCreateWithoutTransactionInput";
import { PATUpdateWithoutTransactionInput } from "../inputs/PATUpdateWithoutTransactionInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PATUpsertWithoutTransactionInput {
  @TypeGraphQL.Field(_type => PATUpdateWithoutTransactionInput, {
    nullable: false
  })
  update!: PATUpdateWithoutTransactionInput;

  @TypeGraphQL.Field(_type => PATCreateWithoutTransactionInput, {
    nullable: false
  })
  create!: PATCreateWithoutTransactionInput;
}
