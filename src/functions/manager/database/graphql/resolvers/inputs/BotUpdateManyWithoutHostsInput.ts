import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateOrConnectWithouthostsInput } from "../inputs/BotCreateOrConnectWithouthostsInput";
import { BotCreateWithoutHostsInput } from "../inputs/BotCreateWithoutHostsInput";
import { BotScalarWhereInput } from "../inputs/BotScalarWhereInput";
import { BotUpdateManyWithWhereWithoutHostsInput } from "../inputs/BotUpdateManyWithWhereWithoutHostsInput";
import { BotUpdateWithWhereUniqueWithoutHostsInput } from "../inputs/BotUpdateWithWhereUniqueWithoutHostsInput";
import { BotUpsertWithWhereUniqueWithoutHostsInput } from "../inputs/BotUpsertWithWhereUniqueWithoutHostsInput";
import { BotWhereUniqueInput } from "../inputs/BotWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotUpdateManyWithoutHostsInput {
  @TypeGraphQL.Field(_type => [BotCreateWithoutHostsInput], {
    nullable: true
  })
  create?: BotCreateWithoutHostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotCreateOrConnectWithouthostsInput], {
    nullable: true
  })
  connectOrCreate?: BotCreateOrConnectWithouthostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotUpsertWithWhereUniqueWithoutHostsInput], {
    nullable: true
  })
  upsert?: BotUpsertWithWhereUniqueWithoutHostsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [BotUpdateWithWhereUniqueWithoutHostsInput], {
    nullable: true
  })
  update?: BotUpdateWithWhereUniqueWithoutHostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotUpdateManyWithWhereWithoutHostsInput], {
    nullable: true
  })
  updateMany?: BotUpdateManyWithWhereWithoutHostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BotScalarWhereInput[] | undefined;
}
