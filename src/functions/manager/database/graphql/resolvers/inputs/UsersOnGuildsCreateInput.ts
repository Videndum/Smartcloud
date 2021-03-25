import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserCreateNestedOneWithoutUsersOnGuildsInput } from "../inputs/DiscordUserCreateNestedOneWithoutUsersOnGuildsInput";
import { GuildCreateNestedOneWithoutMembersInput } from "../inputs/GuildCreateNestedOneWithoutMembersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersOnGuildsCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => GuildCreateNestedOneWithoutMembersInput, {
    nullable: false
  })
  guild!: GuildCreateNestedOneWithoutMembersInput;

  @TypeGraphQL.Field(_type => DiscordUserCreateNestedOneWithoutUsersOnGuildsInput, {
    nullable: false
  })
  user!: DiscordUserCreateNestedOneWithoutUsersOnGuildsInput;
}
