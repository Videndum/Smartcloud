import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TwitchUserCreateWithoutUserInput } from "../inputs/TwitchUserCreateWithoutUserInput";
import { TwitchUserWhereUniqueInput } from "../inputs/TwitchUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitchUserCreateOrConnectWithoutuserInput {
  @TypeGraphQL.Field(_type => TwitchUserWhereUniqueInput, {
    nullable: false
  })
  where!: TwitchUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitchUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: TwitchUserCreateWithoutUserInput;
}
