import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { Bot } from "../models/Bot";
import { Host } from "../models/Host";
import { ShardStatus } from "../enums/ShardStatus";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Shard {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lanchedAt?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  hostId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  botId!: number;

  @TypeGraphQL.Field(_type => ShardStatus, {
    nullable: false
  })
  status!: "REGISTERED" | "STARTING" | "ONLINE" | "DISCONNECTED" | "EXPIRED";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  shardID!: number;

  bot?: Bot;

  Host?: Host;
}
