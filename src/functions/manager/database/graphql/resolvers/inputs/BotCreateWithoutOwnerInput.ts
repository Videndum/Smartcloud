import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostCreateNestedOneWithoutBotsInput } from "../inputs/HostCreateNestedOneWithoutBotsInput";
import { HostCreateNestedOneWithoutPriorityBotInput } from "../inputs/HostCreateNestedOneWithoutPriorityBotInput";
import { ShardCreateNestedManyWithoutBotInput } from "../inputs/ShardCreateNestedManyWithoutBotInput";
import { TwitchAuthCreateNestedOneWithoutBotInput } from "../inputs/TwitchAuthCreateNestedOneWithoutBotInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotCreateWithoutOwnerInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  discordToken?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  twitterToken?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  recommendedShards?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  currentShards?: number | undefined;

  @TypeGraphQL.Field(_type => HostCreateNestedOneWithoutBotsInput, {
    nullable: false
  })
  hosts!: HostCreateNestedOneWithoutBotsInput;

  @TypeGraphQL.Field(_type => HostCreateNestedOneWithoutPriorityBotInput, {
    nullable: true
  })
  priorityHost?: HostCreateNestedOneWithoutPriorityBotInput | undefined;

  @TypeGraphQL.Field(_type => TwitchAuthCreateNestedOneWithoutBotInput, {
    nullable: false
  })
  twitchAuth!: TwitchAuthCreateNestedOneWithoutBotInput;

  @TypeGraphQL.Field(_type => ShardCreateNestedManyWithoutBotInput, {
    nullable: true
  })
  shards?: ShardCreateNestedManyWithoutBotInput | undefined;
}
