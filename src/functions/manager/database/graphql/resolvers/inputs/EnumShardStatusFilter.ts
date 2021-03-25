import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { NestedEnumShardStatusFilter } from "../inputs/NestedEnumShardStatusFilter";
import { ShardStatus } from "../../enums/ShardStatus";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumShardStatusFilter {
  @TypeGraphQL.Field(_type => ShardStatus, {
    nullable: true
  })
  equals?: "REGISTERED" | "STARTING" | "ONLINE" | "DISCONNECTED" | "EXPIRED" | undefined;

  @TypeGraphQL.Field(_type => [ShardStatus], {
    nullable: true
  })
  in?: Array<"REGISTERED" | "STARTING" | "ONLINE" | "DISCONNECTED" | "EXPIRED"> | undefined;

  @TypeGraphQL.Field(_type => [ShardStatus], {
    nullable: true
  })
  notIn?: Array<"REGISTERED" | "STARTING" | "ONLINE" | "DISCONNECTED" | "EXPIRED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumShardStatusFilter, {
    nullable: true
  })
  not?: NestedEnumShardStatusFilter | undefined;
}
