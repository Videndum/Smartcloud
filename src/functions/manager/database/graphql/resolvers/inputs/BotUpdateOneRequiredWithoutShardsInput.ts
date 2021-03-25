import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateOrConnectWithoutshardsInput } from "../inputs/BotCreateOrConnectWithoutshardsInput";
import { BotCreateWithoutShardsInput } from "../inputs/BotCreateWithoutShardsInput";
import { BotUpdateWithoutShardsInput } from "../inputs/BotUpdateWithoutShardsInput";
import { BotUpsertWithoutShardsInput } from "../inputs/BotUpsertWithoutShardsInput";
import { BotWhereUniqueInput } from "../inputs/BotWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotUpdateOneRequiredWithoutShardsInput {
  @TypeGraphQL.Field(_type => BotCreateWithoutShardsInput, {
    nullable: true
  })
  create?: BotCreateWithoutShardsInput | undefined;

  @TypeGraphQL.Field(_type => BotCreateOrConnectWithoutshardsInput, {
    nullable: true
  })
  connectOrCreate?: BotCreateOrConnectWithoutshardsInput | undefined;

  @TypeGraphQL.Field(_type => BotUpsertWithoutShardsInput, {
    nullable: true
  })
  upsert?: BotUpsertWithoutShardsInput | undefined;

  @TypeGraphQL.Field(_type => BotWhereUniqueInput, {
    nullable: true
  })
  connect?: BotWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BotUpdateWithoutShardsInput, {
    nullable: true
  })
  update?: BotUpdateWithoutShardsInput | undefined;
}
