import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserCreateWithoutAdministatesInput } from "../inputs/DiscordUserCreateWithoutAdministatesInput";
import { DiscordUserWhereUniqueInput } from "../inputs/DiscordUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserCreateOrConnectWithoutadministatesInput {
  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: false
  })
  where!: DiscordUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => DiscordUserCreateWithoutAdministatesInput, {
    nullable: false
  })
  create!: DiscordUserCreateWithoutAdministatesInput;
}
