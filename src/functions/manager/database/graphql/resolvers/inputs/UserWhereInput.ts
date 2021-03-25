import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ActionListRelationFilter } from "../inputs/ActionListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { BotListRelationFilter } from "../inputs/BotListRelationFilter";
import { CommandListRelationFilter } from "../inputs/CommandListRelationFilter";
import { DiscordUserRelationFilter } from "../inputs/DiscordUserRelationFilter";
import { HostListRelationFilter } from "../inputs/HostListRelationFilter";
import { ManagerListRelationFilter } from "../inputs/ManagerListRelationFilter";
import { PATListRelationFilter } from "../inputs/PATListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TwitchUserRelationFilter } from "../inputs/TwitchUserRelationFilter";
import { TwitterUserListRelationFilter } from "../inputs/TwitterUserListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  firstName?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  lastName?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isAdmin?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => ActionListRelationFilter, {
    nullable: true
  })
  actions?: ActionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BotListRelationFilter, {
    nullable: true
  })
  Bot?: BotListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommandListRelationFilter, {
    nullable: true
  })
  commands?: CommandListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DiscordUserRelationFilter, {
    nullable: true
  })
  discord?: DiscordUserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => HostListRelationFilter, {
    nullable: true
  })
  Hosts?: HostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ManagerListRelationFilter, {
    nullable: true
  })
  Manager?: ManagerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PATListRelationFilter, {
    nullable: true
  })
  pat?: PATListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TwitchUserRelationFilter, {
    nullable: true
  })
  twitch?: TwitchUserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TwitterUserListRelationFilter, {
    nullable: true
  })
  TwitterUser?: TwitterUserListRelationFilter | undefined;
}
