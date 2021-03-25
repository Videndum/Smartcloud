import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateWithoutTransactionInput } from "../inputs/ManagerCreateWithoutTransactionInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerCreateOrConnectWithouttransactionInput {
  @TypeGraphQL.Field(_type => ManagerWhereUniqueInput, {
    nullable: false
  })
  where!: ManagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => ManagerCreateWithoutTransactionInput, {
    nullable: false
  })
  create!: ManagerCreateWithoutTransactionInput;
}
