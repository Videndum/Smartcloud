import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserCreateOrConnectWithoutuserInput } from "../inputs/DiscordUserCreateOrConnectWithoutuserInput";
import { DiscordUserCreateWithoutUserInput } from "../inputs/DiscordUserCreateWithoutUserInput";
import { DiscordUserWhereUniqueInput } from "../inputs/DiscordUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => DiscordUserCreateWithoutUserInput, {
    nullable: true
  })
  create?: DiscordUserCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserCreateOrConnectWithoutuserInput, {
    nullable: true
  })
  connectOrCreate?: DiscordUserCreateOrConnectWithoutuserInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: true
  })
  connect?: DiscordUserWhereUniqueInput | undefined;
}
