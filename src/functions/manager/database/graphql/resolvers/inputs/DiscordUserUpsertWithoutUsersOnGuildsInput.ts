import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserCreateWithoutUsersOnGuildsInput } from "../inputs/DiscordUserCreateWithoutUsersOnGuildsInput";
import { DiscordUserUpdateWithoutUsersOnGuildsInput } from "../inputs/DiscordUserUpdateWithoutUsersOnGuildsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserUpsertWithoutUsersOnGuildsInput {
  @TypeGraphQL.Field(_type => DiscordUserUpdateWithoutUsersOnGuildsInput, {
    nullable: false
  })
  update!: DiscordUserUpdateWithoutUsersOnGuildsInput;

  @TypeGraphQL.Field(_type => DiscordUserCreateWithoutUsersOnGuildsInput, {
    nullable: false
  })
  create!: DiscordUserCreateWithoutUsersOnGuildsInput;
}
