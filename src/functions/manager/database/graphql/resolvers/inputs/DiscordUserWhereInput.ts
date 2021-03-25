import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsListRelationFilter } from "../inputs/AdminOnGuildsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { UsersOnGuildsListRelationFilter } from "../inputs/UsersOnGuildsListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserWhereInput {
  @TypeGraphQL.Field(_type => [DiscordUserWhereInput], {
    nullable: true
  })
  AND?: DiscordUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserWhereInput], {
    nullable: true
  })
  OR?: DiscordUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserWhereInput], {
    nullable: true
  })
  NOT?: DiscordUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  discrim?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  userId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AdminOnGuildsListRelationFilter, {
    nullable: true
  })
  administates?: AdminOnGuildsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UsersOnGuildsListRelationFilter, {
    nullable: true
  })
  UsersOnGuilds?: UsersOnGuildsListRelationFilter | undefined;
}
