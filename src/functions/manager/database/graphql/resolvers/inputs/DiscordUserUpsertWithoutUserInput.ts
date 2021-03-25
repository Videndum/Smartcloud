import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserCreateWithoutUserInput } from "../inputs/DiscordUserCreateWithoutUserInput";
import { DiscordUserUpdateWithoutUserInput } from "../inputs/DiscordUserUpdateWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => DiscordUserUpdateWithoutUserInput, {
    nullable: false
  })
  update!: DiscordUserUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => DiscordUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: DiscordUserCreateWithoutUserInput;
}
