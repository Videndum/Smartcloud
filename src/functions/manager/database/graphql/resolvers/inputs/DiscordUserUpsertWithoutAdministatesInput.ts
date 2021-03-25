import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserCreateWithoutAdministatesInput } from "../inputs/DiscordUserCreateWithoutAdministatesInput";
import { DiscordUserUpdateWithoutAdministatesInput } from "../inputs/DiscordUserUpdateWithoutAdministatesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserUpsertWithoutAdministatesInput {
  @TypeGraphQL.Field(_type => DiscordUserUpdateWithoutAdministatesInput, {
    nullable: false
  })
  update!: DiscordUserUpdateWithoutAdministatesInput;

  @TypeGraphQL.Field(_type => DiscordUserCreateWithoutAdministatesInput, {
    nullable: false
  })
  create!: DiscordUserCreateWithoutAdministatesInput;
}
