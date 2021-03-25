import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserOrderByInput } from "../inputs/DiscordUserOrderByInput";
import { TwitchUserOrderByInput } from "../inputs/TwitchUserOrderByInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isAdmin?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DiscordUserOrderByInput, {
    nullable: true
  })
  discord?: DiscordUserOrderByInput | undefined;

  @TypeGraphQL.Field(_type => TwitchUserOrderByInput, {
    nullable: true
  })
  twitch?: TwitchUserOrderByInput | undefined;
}
