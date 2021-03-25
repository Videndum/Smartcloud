import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserOrderByInput } from "../inputs/DiscordUserOrderByInput";
import { GuildOrderByInput } from "../inputs/GuildOrderByInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOnGuildsOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  guildId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildOrderByInput, {
    nullable: true
  })
  guild?: GuildOrderByInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserOrderByInput, {
    nullable: true
  })
  user?: DiscordUserOrderByInput | undefined;
}
