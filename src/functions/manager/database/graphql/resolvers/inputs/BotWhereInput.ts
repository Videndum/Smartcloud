import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { HostRelationFilter } from "../inputs/HostRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ShardListRelationFilter } from "../inputs/ShardListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TwitchAuthRelationFilter } from "../inputs/TwitchAuthRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotWhereInput {
  @TypeGraphQL.Field(_type => [BotWhereInput], {
    nullable: true
  })
  AND?: BotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotWhereInput], {
    nullable: true
  })
  OR?: BotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BotWhereInput], {
    nullable: true
  })
  NOT?: BotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  hostsId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  priorityHostId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  discordToken?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  twitterToken?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  twitchAuthId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  recommendedShards?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  currentShards?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => HostRelationFilter, {
    nullable: true
  })
  hosts?: HostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  owner?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => HostRelationFilter, {
    nullable: true
  })
  priorityHost?: HostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TwitchAuthRelationFilter, {
    nullable: true
  })
  twitchAuth?: TwitchAuthRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ShardListRelationFilter, {
    nullable: true
  })
  shards?: ShardListRelationFilter | undefined;
}
