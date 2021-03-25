import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TransactionCreateOrConnectWithoutpatInput } from "../inputs/TransactionCreateOrConnectWithoutpatInput";
import { TransactionCreateWithoutPatInput } from "../inputs/TransactionCreateWithoutPatInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionCreateNestedManyWithoutPatInput {
  @TypeGraphQL.Field(_type => [TransactionCreateWithoutPatInput], {
    nullable: true
  })
  create?: TransactionCreateWithoutPatInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutpatInput], {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutpatInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  connect?: TransactionWhereUniqueInput[] | undefined;
}
