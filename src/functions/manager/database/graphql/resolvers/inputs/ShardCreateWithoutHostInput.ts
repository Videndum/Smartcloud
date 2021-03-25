import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotCreateNestedOneWithoutShardsInput } from "../inputs/BotCreateNestedOneWithoutShardsInput";
import { ShardStatus } from "../../enums/ShardStatus";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShardCreateWithoutHostInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lanchedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ShardStatus, {
    nullable: true
  })
  status?: "REGISTERED" | "STARTING" | "ONLINE" | "DISCONNECTED" | "EXPIRED" | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  shardID!: number;

  @TypeGraphQL.Field(_type => BotCreateNestedOneWithoutShardsInput, {
    nullable: false
  })
  bot!: BotCreateNestedOneWithoutShardsInput;
}
