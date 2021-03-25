import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotListRelationFilter } from "../inputs/BotListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ShardListRelationFilter } from "../inputs/ShardListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostWhereInput {
  @TypeGraphQL.Field(_type => [HostWhereInput], {
    nullable: true
  })
  AND?: HostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HostWhereInput], {
    nullable: true
  })
  OR?: HostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HostWhereInput], {
    nullable: true
  })
  NOT?: HostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ip?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  port?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  shardLimit?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  owner?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BotListRelationFilter, {
    nullable: true
  })
  bots?: BotListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BotListRelationFilter, {
    nullable: true
  })
  priorityBot?: BotListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ShardListRelationFilter, {
    nullable: true
  })
  shards?: ShardListRelationFilter | undefined;
}
