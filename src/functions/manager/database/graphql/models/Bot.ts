import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { Host } from "../models/Host";
import { Shard } from "../models/Shard";
import { TwitchAuth } from "../models/TwitchAuth";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Bot {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ownerId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  hostsId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priorityHostId?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  discordToken?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  twitterToken?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  twitchAuthId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  recommendedShards!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  currentShards!: number;

  hosts?: Host;

  owner?: User;

  priorityHost?: Host | null;

  twitchAuth?: TwitchAuth;

  shards?: Shard[];
}
