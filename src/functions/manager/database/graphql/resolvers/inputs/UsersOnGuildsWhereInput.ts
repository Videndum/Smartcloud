import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DiscordUserRelationFilter } from "../inputs/DiscordUserRelationFilter";
import { GuildRelationFilter } from "../inputs/GuildRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersOnGuildsWhereInput {
  @TypeGraphQL.Field(_type => [UsersOnGuildsWhereInput], {
    nullable: true
  })
  AND?: UsersOnGuildsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsWhereInput], {
    nullable: true
  })
  OR?: UsersOnGuildsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsWhereInput], {
    nullable: true
  })
  NOT?: UsersOnGuildsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  guildId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => GuildRelationFilter, {
    nullable: true
  })
  guild?: GuildRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DiscordUserRelationFilter, {
    nullable: true
  })
  user?: DiscordUserRelationFilter | undefined;
}
