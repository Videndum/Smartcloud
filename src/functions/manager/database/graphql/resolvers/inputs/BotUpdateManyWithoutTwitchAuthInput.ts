import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateOrConnectWithouttwitchAuthInput } from "../inputs/BotCreateOrConnectWithouttwitchAuthInput";
import { BotCreateWithoutTwitchAuthInput } from "../inputs/BotCreateWithoutTwitchAuthInput";
import { BotScalarWhereInput } from "../inputs/BotScalarWhereInput";
import { BotUpdateManyWithWhereWithoutTwitchAuthInput } from "../inputs/BotUpdateManyWithWhereWithoutTwitchAuthInput";
import { BotUpdateWithWhereUniqueWithoutTwitchAuthInput } from "../inputs/BotUpdateWithWhereUniqueWithoutTwitchAuthInput";
import { BotUpsertWithWhereUniqueWithoutTwitchAuthInput } from "../inputs/BotUpsertWithWhereUniqueWithoutTwitchAuthInput";
import { BotWhereUniqueInput } from "../inputs/BotWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotUpdateManyWithoutTwitchAuthInput {
  @TypeGraphQL.Field(_type => [BotCreateWithoutTwitchAuthInput], {
    nullable: true
  })
  create?: BotCreateWithoutTwitchAuthInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotCreateOrConnectWithouttwitchAuthInput], {
    nullable: true
  })
  connectOrCreate?: BotCreateOrConnectWithouttwitchAuthInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotUpsertWithWhereUniqueWithoutTwitchAuthInput], {
    nullable: true
  })
  upsert?: BotUpsertWithWhereUniqueWithoutTwitchAuthInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [BotUpdateWithWhereUniqueWithoutTwitchAuthInput], {
    nullable: true
  })
  update?: BotUpdateWithWhereUniqueWithoutTwitchAuthInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotUpdateManyWithWhereWithoutTwitchAuthInput], {
    nullable: true
  })
  updateMany?: BotUpdateManyWithWhereWithoutTwitchAuthInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BotScalarWhereInput[] | undefined;
}
