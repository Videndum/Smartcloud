import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TwitchUserCreateWithoutUserInput } from "../inputs/TwitchUserCreateWithoutUserInput";
import { TwitchUserUpdateWithoutUserInput } from "../inputs/TwitchUserUpdateWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitchUserUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => TwitchUserUpdateWithoutUserInput, {
    nullable: false
  })
  update!: TwitchUserUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => TwitchUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: TwitchUserCreateWithoutUserInput;
}
