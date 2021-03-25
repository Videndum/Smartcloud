import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PATCreateOrConnectWithouttransactionInput } from "../inputs/PATCreateOrConnectWithouttransactionInput";
import { PATCreateWithoutTransactionInput } from "../inputs/PATCreateWithoutTransactionInput";
import { PATWhereUniqueInput } from "../inputs/PATWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PATCreateNestedOneWithoutTransactionInput {
  @TypeGraphQL.Field(_type => PATCreateWithoutTransactionInput, {
    nullable: true
  })
  create?: PATCreateWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => PATCreateOrConnectWithouttransactionInput, {
    nullable: true
  })
  connectOrCreate?: PATCreateOrConnectWithouttransactionInput | undefined;

  @TypeGraphQL.Field(_type => PATWhereUniqueInput, {
    nullable: true
  })
  connect?: PATWhereUniqueInput | undefined;
}
