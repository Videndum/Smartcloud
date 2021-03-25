import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { Bot } from "../models/Bot";
import { Shard } from "../models/Shard";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Host {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ownerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ip!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  port!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  shardLimit!: number;

  owner?: User;

  bots?: Bot[];

  priorityBot?: Bot[];

  shards?: Shard[];
}
