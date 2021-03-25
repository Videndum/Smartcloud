import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TwitchAuthCreateWithoutBotInput } from "../inputs/TwitchAuthCreateWithoutBotInput";
import { TwitchAuthUpdateWithoutBotInput } from "../inputs/TwitchAuthUpdateWithoutBotInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitchAuthUpsertWithoutBotInput {
  @TypeGraphQL.Field(_type => TwitchAuthUpdateWithoutBotInput, {
    nullable: false
  })
  update!: TwitchAuthUpdateWithoutBotInput;

  @TypeGraphQL.Field(_type => TwitchAuthCreateWithoutBotInput, {
    nullable: false
  })
  create!: TwitchAuthCreateWithoutBotInput;
}
