import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateOrConnectWithoutownerInput } from "../inputs/BotCreateOrConnectWithoutownerInput";
import { BotCreateWithoutOwnerInput } from "../inputs/BotCreateWithoutOwnerInput";
import { BotScalarWhereInput } from "../inputs/BotScalarWhereInput";
import { BotUpdateManyWithWhereWithoutOwnerInput } from "../inputs/BotUpdateManyWithWhereWithoutOwnerInput";
import { BotUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/BotUpdateWithWhereUniqueWithoutOwnerInput";
import { BotUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/BotUpsertWithWhereUniqueWithoutOwnerInput";
import { BotWhereUniqueInput } from "../inputs/BotWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [BotCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: BotCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotCreateOrConnectWithoutownerInput], {
    nullable: true
  })
  connectOrCreate?: BotCreateOrConnectWithoutownerInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: BotUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotWhereUniqueInput], {
    nullable: true
  })
  connect?: BotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotWhereUniqueInput], {
    nullable: true
  })
  set?: BotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotWhereUniqueInput], {
    nullable: true
  })
  delete?: BotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: BotUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: BotUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BotScalarWhereInput[] | undefined;
}
