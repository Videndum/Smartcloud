import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TransactionCreateOrConnectWithoutresponsibleManagerInput } from "../inputs/TransactionCreateOrConnectWithoutresponsibleManagerInput";
import { TransactionCreateWithoutResponsibleManagerInput } from "../inputs/TransactionCreateWithoutResponsibleManagerInput";
import { TransactionScalarWhereInput } from "../inputs/TransactionScalarWhereInput";
import { TransactionUpdateManyWithWhereWithoutResponsibleManagerInput } from "../inputs/TransactionUpdateManyWithWhereWithoutResponsibleManagerInput";
import { TransactionUpdateWithWhereUniqueWithoutResponsibleManagerInput } from "../inputs/TransactionUpdateWithWhereUniqueWithoutResponsibleManagerInput";
import { TransactionUpsertWithWhereUniqueWithoutResponsibleManagerInput } from "../inputs/TransactionUpsertWithWhereUniqueWithoutResponsibleManagerInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionUpdateManyWithoutResponsibleManagerInput {
  @TypeGraphQL.Field(_type => [TransactionCreateWithoutResponsibleManagerInput], {
    nullable: true
  })
  create?: TransactionCreateWithoutResponsibleManagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutresponsibleManagerInput], {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutresponsibleManagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpsertWithWhereUniqueWithoutResponsibleManagerInput], {
    nullable: true
  })
  upsert?: TransactionUpsertWithWhereUniqueWithoutResponsibleManagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  connect?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  set?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  delete?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpdateWithWhereUniqueWithoutResponsibleManagerInput], {
    nullable: true
  })
  update?: TransactionUpdateWithWhereUniqueWithoutResponsibleManagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpdateManyWithWhereWithoutResponsibleManagerInput], {
    nullable: true
  })
  updateMany?: TransactionUpdateManyWithWhereWithoutResponsibleManagerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TransactionScalarWhereInput[] | undefined;
}
