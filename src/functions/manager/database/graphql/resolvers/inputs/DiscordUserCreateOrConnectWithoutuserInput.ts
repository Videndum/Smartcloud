import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserCreateWithoutUserInput } from "../inputs/DiscordUserCreateWithoutUserInput";
import { DiscordUserWhereUniqueInput } from "../inputs/DiscordUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserCreateOrConnectWithoutuserInput {
  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: false
  })
  where!: DiscordUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => DiscordUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: DiscordUserCreateWithoutUserInput;
}
