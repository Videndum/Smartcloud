import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PATCreateOrConnectWithouttransactionInput } from "../inputs/PATCreateOrConnectWithouttransactionInput";
import { PATCreateWithoutTransactionInput } from "../inputs/PATCreateWithoutTransactionInput";
import { PATUpdateWithoutTransactionInput } from "../inputs/PATUpdateWithoutTransactionInput";
import { PATUpsertWithoutTransactionInput } from "../inputs/PATUpsertWithoutTransactionInput";
import { PATWhereUniqueInput } from "../inputs/PATWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PATUpdateOneWithoutTransactionInput {
  @TypeGraphQL.Field(_type => PATCreateWithoutTransactionInput, {
    nullable: true
  })
  create?: PATCreateWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => PATCreateOrConnectWithouttransactionInput, {
    nullable: true
  })
  connectOrCreate?: PATCreateOrConnectWithouttransactionInput | undefined;

  @TypeGraphQL.Field(_type => PATUpsertWithoutTransactionInput, {
    nullable: true
  })
  upsert?: PATUpsertWithoutTransactionInput | undefined;

  @TypeGraphQL.Field(_type => PATWhereUniqueInput, {
    nullable: true
  })
  connect?: PATWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PATUpdateWithoutTransactionInput, {
    nullable: true
  })
  update?: PATUpdateWithoutTransactionInput | undefined;
}
