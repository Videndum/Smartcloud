import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostOrderByInput } from "../inputs/HostOrderByInput";
import { TwitchAuthOrderByInput } from "../inputs/TwitchAuthOrderByInput";
import { UserOrderByInput } from "../inputs/UserOrderByInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  hostsId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  priorityHostId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  discordToken?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  twitterToken?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  twitchAuthId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  recommendedShards?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  currentShards?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => HostOrderByInput, {
    nullable: true
  })
  hosts?: HostOrderByInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByInput, {
    nullable: true
  })
  owner?: UserOrderByInput | undefined;

  @TypeGraphQL.Field(_type => HostOrderByInput, {
    nullable: true
  })
  priorityHost?: HostOrderByInput | undefined;

  @TypeGraphQL.Field(_type => TwitchAuthOrderByInput, {
    nullable: true
  })
  twitchAuth?: TwitchAuthOrderByInput | undefined;
}
