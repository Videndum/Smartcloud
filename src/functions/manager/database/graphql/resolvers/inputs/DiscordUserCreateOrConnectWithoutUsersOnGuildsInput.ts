import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserCreateWithoutUsersOnGuildsInput } from "../inputs/DiscordUserCreateWithoutUsersOnGuildsInput";
import { DiscordUserWhereUniqueInput } from "../inputs/DiscordUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserCreateOrConnectWithoutUsersOnGuildsInput {
  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: false
  })
  where!: DiscordUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => DiscordUserCreateWithoutUsersOnGuildsInput, {
    nullable: false
  })
  create!: DiscordUserCreateWithoutUsersOnGuildsInput;
}
