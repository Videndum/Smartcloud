import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateOrConnectWithouttransactionInput } from "../inputs/ManagerCreateOrConnectWithouttransactionInput";
import { ManagerCreateWithoutTransactionInput } from "../inputs/ManagerCreateWithoutTransactionInput";
import { ManagerUpdateWithoutTransactionInput } from "../inputs/ManagerUpdateWithoutTransactionInput";
import { ManagerUpsertWithoutTransactionInput } from "../inputs/ManagerUpsertWithoutTransactionInput";
import { ManagerWhereUniqueInput } from "../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpdateOneRequiredWithoutTransactionInput {
  @TypeGraphQL.Field(_type => ManagerCreateWithoutTransactionInput, {
    nullable: true
  })
  create?: ManagerCreateWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => ManagerCreateOrConnectWithouttransactionInput, {
    nullable: true
  })
  connectOrCreate?: ManagerCreateOrConnectWithouttransactionInput | undefined;

  @TypeGraphQL.Field(_type => ManagerUpsertWithoutTransactionInput, {
    nullable: true
  })
  upsert?: ManagerUpsertWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => ManagerWhereUniqueInput, {
    nullable: true
  })
  connect?: ManagerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ManagerUpdateWithoutTransactionInput, {
    nullable: true
  })
  update?: ManagerUpdateWithoutTransactionInput | undefined;
}
