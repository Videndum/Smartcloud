import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TwitchAuthCreateWithoutBotInput } from "../inputs/TwitchAuthCreateWithoutBotInput";
import { TwitchAuthWhereUniqueInput } from "../inputs/TwitchAuthWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitchAuthCreateOrConnectWithoutBotInput {
  @TypeGraphQL.Field(_type => TwitchAuthWhereUniqueInput, {
    nullable: false
  })
  where!: TwitchAuthWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitchAuthCreateWithoutBotInput, {
    nullable: false
  })
  create!: TwitchAuthCreateWithoutBotInput;
}
