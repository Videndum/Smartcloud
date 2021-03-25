import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateOrConnectWithoutpriorityHostInput } from "../inputs/BotCreateOrConnectWithoutpriorityHostInput";
import { BotCreateWithoutPriorityHostInput } from "../inputs/BotCreateWithoutPriorityHostInput";
import { BotScalarWhereInput } from "../inputs/BotScalarWhereInput";
import { BotUpdateManyWithWhereWithoutPriorityHostInput } from "../inputs/BotUpdateManyWithWhereWithoutPriorityHostInput";
import { BotUpdateWithWhereUniqueWithoutPriorityHostInput } from "../inputs/BotUpdateWithWhereUniqueWithoutPriorityHostInput";
import { BotUpsertWithWhereUniqueWithoutPriorityHostInput } from "../inputs/BotUpsertWithWhereUniqueWithoutPriorityHostInput";
import { BotWhereUniqueInput } from "../inputs/BotWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotUpdateManyWithoutPriorityHostInput {
  @TypeGraphQL.Field(_type => [BotCreateWithoutPriorityHostInput], {
    nullable: true
  })
  create?: BotCreateWithoutPriorityHostInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotCreateOrConnectWithoutpriorityHostInput], {
    nullable: true
  })
  connectOrCreate?: BotCreateOrConnectWithoutpriorityHostInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotUpsertWithWhereUniqueWithoutPriorityHostInput], {
    nullable: true
  })
  upsert?: BotUpsertWithWhereUniqueWithoutPriorityHostInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [BotUpdateWithWhereUniqueWithoutPriorityHostInput], {
    nullable: true
  })
  update?: BotUpdateWithWhereUniqueWithoutPriorityHostInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotUpdateManyWithWhereWithoutPriorityHostInput], {
    nullable: true
  })
  updateMany?: BotUpdateManyWithWhereWithoutPriorityHostInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BotScalarWhereInput[] | undefined;
}
