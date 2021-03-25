import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotRelationFilter } from "../inputs/BotRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumShardStatusFilter } from "../inputs/EnumShardStatusFilter";
import { HostRelationFilter } from "../inputs/HostRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShardWhereInput {
  @TypeGraphQL.Field(_type => [ShardWhereInput], {
    nullable: true
  })
  AND?: ShardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardWhereInput], {
    nullable: true
  })
  OR?: ShardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShardWhereInput], {
    nullable: true
  })
  NOT?: ShardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  lanchedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  hostId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  botId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumShardStatusFilter, {
    nullable: true
  })
  status?: EnumShardStatusFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  shardID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BotRelationFilter, {
    nullable: true
  })
  bot?: BotRelationFilter | undefined;

  @TypeGraphQL.Field(_type => HostRelationFilter, {
    nullable: true
  })
  Host?: HostRelationFilter | undefined;
}
