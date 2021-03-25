import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TwitchUserCreateOrConnectWithoutuserInput } from "../inputs/TwitchUserCreateOrConnectWithoutuserInput";
import { TwitchUserCreateWithoutUserInput } from "../inputs/TwitchUserCreateWithoutUserInput";
import { TwitchUserWhereUniqueInput } from "../inputs/TwitchUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitchUserCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => TwitchUserCreateWithoutUserInput, {
    nullable: true
  })
  create?: TwitchUserCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TwitchUserCreateOrConnectWithoutuserInput, {
    nullable: true
  })
  connectOrCreate?: TwitchUserCreateOrConnectWithoutuserInput | undefined;

  @TypeGraphQL.Field(_type => TwitchUserWhereUniqueInput, {
    nullable: true
  })
  connect?: TwitchUserWhereUniqueInput | undefined;
}
