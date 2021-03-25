import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TransactionCreateOrConnectWithoutresponsibleManagerInput } from "../inputs/TransactionCreateOrConnectWithoutresponsibleManagerInput";
import { TransactionCreateWithoutResponsibleManagerInput } from "../inputs/TransactionCreateWithoutResponsibleManagerInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionCreateNestedManyWithoutResponsibleManagerInput {
  @TypeGraphQL.Field(_type => [TransactionCreateWithoutResponsibleManagerInput], {
    nullable: true
  })
  create?: TransactionCreateWithoutResponsibleManagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutresponsibleManagerInput], {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutresponsibleManagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  connect?: TransactionWhereUniqueInput[] | undefined;
}
