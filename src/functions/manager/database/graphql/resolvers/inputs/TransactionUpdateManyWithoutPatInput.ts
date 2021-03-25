import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TransactionCreateOrConnectWithoutpatInput } from "../inputs/TransactionCreateOrConnectWithoutpatInput";
import { TransactionCreateWithoutPatInput } from "../inputs/TransactionCreateWithoutPatInput";
import { TransactionScalarWhereInput } from "../inputs/TransactionScalarWhereInput";
import { TransactionUpdateManyWithWhereWithoutPatInput } from "../inputs/TransactionUpdateManyWithWhereWithoutPatInput";
import { TransactionUpdateWithWhereUniqueWithoutPatInput } from "../inputs/TransactionUpdateWithWhereUniqueWithoutPatInput";
import { TransactionUpsertWithWhereUniqueWithoutPatInput } from "../inputs/TransactionUpsertWithWhereUniqueWithoutPatInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionUpdateManyWithoutPatInput {
  @TypeGraphQL.Field(_type => [TransactionCreateWithoutPatInput], {
    nullable: true
  })
  create?: TransactionCreateWithoutPatInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutpatInput], {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutpatInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpsertWithWhereUniqueWithoutPatInput], {
    nullable: true
  })
  upsert?: TransactionUpsertWithWhereUniqueWithoutPatInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [TransactionUpdateWithWhereUniqueWithoutPatInput], {
    nullable: true
  })
  update?: TransactionUpdateWithWhereUniqueWithoutPatInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpdateManyWithWhereWithoutPatInput], {
    nullable: true
  })
  updateMany?: TransactionUpdateManyWithWhereWithoutPatInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TransactionScalarWhereInput[] | undefined;
}
