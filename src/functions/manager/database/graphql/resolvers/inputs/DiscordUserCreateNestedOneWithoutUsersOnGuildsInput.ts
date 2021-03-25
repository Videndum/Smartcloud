import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserCreateOrConnectWithoutUsersOnGuildsInput } from "../inputs/DiscordUserCreateOrConnectWithoutUsersOnGuildsInput";
import { DiscordUserCreateWithoutUsersOnGuildsInput } from "../inputs/DiscordUserCreateWithoutUsersOnGuildsInput";
import { DiscordUserWhereUniqueInput } from "../inputs/DiscordUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserCreateNestedOneWithoutUsersOnGuildsInput {
  @TypeGraphQL.Field(_type => DiscordUserCreateWithoutUsersOnGuildsInput, {
    nullable: true
  })
  create?: DiscordUserCreateWithoutUsersOnGuildsInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserCreateOrConnectWithoutUsersOnGuildsInput, {
    nullable: true
  })
  connectOrCreate?: DiscordUserCreateOrConnectWithoutUsersOnGuildsInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: true
  })
  connect?: DiscordUserWhereUniqueInput | undefined;
}
