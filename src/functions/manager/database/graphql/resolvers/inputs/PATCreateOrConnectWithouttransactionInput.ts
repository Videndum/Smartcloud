import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PATCreateWithoutTransactionInput } from "../inputs/PATCreateWithoutTransactionInput";
import { PATWhereUniqueInput } from "../inputs/PATWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PATCreateOrConnectWithouttransactionInput {
  @TypeGraphQL.Field(_type => PATWhereUniqueInput, {
    nullable: false
  })
  where!: PATWhereUniqueInput;

  @TypeGraphQL.Field(_type => PATCreateWithoutTransactionInput, {
    nullable: false
  })
  create!: PATCreateWithoutTransactionInput;
}
