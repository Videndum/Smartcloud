import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateOrConnectWithouttransactionInput } from "../inputs/ManagerCreateOrConnectWithouttransactionInput";
import { ManagerCreateWithoutTransactionInput } from "../inputs/ManagerCreateWithoutTransactionInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerCreateNestedOneWithoutTransactionInput {
  @TypeGraphQL.Field(_type => ManagerCreateWithoutTransactionInput, {
    nullable: true
  })
  create?: ManagerCreateWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => ManagerCreateOrConnectWithouttransactionInput, {
    nullable: true
  })
  connectOrCreate?: ManagerCreateOrConnectWithouttransactionInput | undefined;

  @TypeGraphQL.Field(_type => ManagerWhereUniqueInput, {
    nullable: true
  })
  connect?: ManagerWhereUniqueInput | undefined;
}
