import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateOrConnectWithoutshardsInput } from "../inputs/BotCreateOrConnectWithoutshardsInput";
import { BotCreateWithoutShardsInput } from "../inputs/BotCreateWithoutShardsInput";
import { BotWhereUniqueInput } from "../inputs/BotWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotCreateNestedOneWithoutShardsInput {
  @TypeGraphQL.Field(_type => BotCreateWithoutShardsInput, {
    nullable: true
  })
  create?: BotCreateWithoutShardsInput | undefined;

  @TypeGraphQL.Field(_type => BotCreateOrConnectWithoutshardsInput, {
    nullable: true
  })
  connectOrCreate?: BotCreateOrConnectWithoutshardsInput | undefined;

  @TypeGraphQL.Field(_type => BotWhereUniqueInput, {
    nullable: true
  })
  connect?: BotWhereUniqueInput | undefined;
}
