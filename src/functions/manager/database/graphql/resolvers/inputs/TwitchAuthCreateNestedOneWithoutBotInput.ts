import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TwitchAuthCreateOrConnectWithoutBotInput } from "../inputs/TwitchAuthCreateOrConnectWithoutBotInput";
import { TwitchAuthCreateWithoutBotInput } from "../inputs/TwitchAuthCreateWithoutBotInput";
import { TwitchAuthWhereUniqueInput } from "../inputs/TwitchAuthWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitchAuthCreateNestedOneWithoutBotInput {
  @TypeGraphQL.Field(_type => TwitchAuthCreateWithoutBotInput, {
    nullable: true
  })
  create?: TwitchAuthCreateWithoutBotInput | undefined;

  @TypeGraphQL.Field(_type => TwitchAuthCreateOrConnectWithoutBotInput, {
    nullable: true
  })
  connectOrCreate?: TwitchAuthCreateOrConnectWithoutBotInput | undefined;

  @TypeGraphQL.Field(_type => TwitchAuthWhereUniqueInput, {
    nullable: true
  })
  connect?: TwitchAuthWhereUniqueInput | undefined;
}
