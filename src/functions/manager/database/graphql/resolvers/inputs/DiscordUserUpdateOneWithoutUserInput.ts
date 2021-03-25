import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserCreateOrConnectWithoutuserInput } from "../inputs/DiscordUserCreateOrConnectWithoutuserInput";
import { DiscordUserCreateWithoutUserInput } from "../inputs/DiscordUserCreateWithoutUserInput";
import { DiscordUserUpdateWithoutUserInput } from "../inputs/DiscordUserUpdateWithoutUserInput";
import { DiscordUserUpsertWithoutUserInput } from "../inputs/DiscordUserUpsertWithoutUserInput";
import { DiscordUserWhereUniqueInput } from "../inputs/DiscordUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserUpdateOneWithoutUserInput {
  @TypeGraphQL.Field(_type => DiscordUserCreateWithoutUserInput, {
    nullable: true
  })
  create?: DiscordUserCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserCreateOrConnectWithoutuserInput, {
    nullable: true
  })
  connectOrCreate?: DiscordUserCreateOrConnectWithoutuserInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: DiscordUserUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: true
  })
  connect?: DiscordUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => DiscordUserUpdateWithoutUserInput, {
    nullable: true
  })
  update?: DiscordUserUpdateWithoutUserInput | undefined;
}
