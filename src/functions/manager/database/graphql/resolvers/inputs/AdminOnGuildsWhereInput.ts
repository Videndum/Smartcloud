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
export class AdminOnGuildsWhereInput {
  @TypeGraphQL.Field(_type => [AdminOnGuildsWhereInput], {
    nullable: true
  })
  AND?: AdminOnGuildsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsWhereInput], {
    nullable: true
  })
  OR?: AdminOnGuildsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsWhereInput], {
    nullable: true
  })
  NOT?: AdminOnGuildsWhereInput[] | undefined;

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
