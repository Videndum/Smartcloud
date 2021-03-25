import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ShardStatus } from "../../enums/ShardStatus";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ShardMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lanchedAt!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  hostId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  botId!: number;

  @TypeGraphQL.Field(_type => ShardStatus, {
    nullable: true
  })
  status!: "REGISTERED" | "STARTING" | "ONLINE" | "DISCONNECTED" | "EXPIRED" | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  shardID!: number;
}
