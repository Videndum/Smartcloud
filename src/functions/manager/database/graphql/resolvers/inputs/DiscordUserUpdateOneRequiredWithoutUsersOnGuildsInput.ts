import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserCreateOrConnectWithoutUsersOnGuildsInput } from "../inputs/DiscordUserCreateOrConnectWithoutUsersOnGuildsInput";
import { DiscordUserCreateWithoutUsersOnGuildsInput } from "../inputs/DiscordUserCreateWithoutUsersOnGuildsInput";
import { DiscordUserUpdateWithoutUsersOnGuildsInput } from "../inputs/DiscordUserUpdateWithoutUsersOnGuildsInput";
import { DiscordUserUpsertWithoutUsersOnGuildsInput } from "../inputs/DiscordUserUpsertWithoutUsersOnGuildsInput";
import { DiscordUserWhereUniqueInput } from "../inputs/DiscordUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserUpdateOneRequiredWithoutUsersOnGuildsInput {
  @TypeGraphQL.Field(_type => DiscordUserCreateWithoutUsersOnGuildsInput, {
    nullable: true
  })
  create?: DiscordUserCreateWithoutUsersOnGuildsInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserCreateOrConnectWithoutUsersOnGuildsInput, {
    nullable: true
  })
  connectOrCreate?: DiscordUserCreateOrConnectWithoutUsersOnGuildsInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserUpsertWithoutUsersOnGuildsInput, {
    nullable: true
  })
  upsert?: DiscordUserUpsertWithoutUsersOnGuildsInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: true
  })
  connect?: DiscordUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserUpdateWithoutUsersOnGuildsInput, {
    nullable: true
  })
  update?: DiscordUserUpdateWithoutUsersOnGuildsInput | undefined;
}
