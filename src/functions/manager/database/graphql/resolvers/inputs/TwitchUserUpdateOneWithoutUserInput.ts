import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TwitchUserCreateOrConnectWithoutuserInput } from "../inputs/TwitchUserCreateOrConnectWithoutuserInput";
import { TwitchUserCreateWithoutUserInput } from "../inputs/TwitchUserCreateWithoutUserInput";
import { TwitchUserUpdateWithoutUserInput } from "../inputs/TwitchUserUpdateWithoutUserInput";
import { TwitchUserUpsertWithoutUserInput } from "../inputs/TwitchUserUpsertWithoutUserInput";
import { TwitchUserWhereUniqueInput } from "../inputs/TwitchUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitchUserUpdateOneWithoutUserInput {
  @TypeGraphQL.Field(_type => TwitchUserCreateWithoutUserInput, {
    nullable: true
  })
  create?: TwitchUserCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TwitchUserCreateOrConnectWithoutuserInput, {
    nullable: true
  })
  connectOrCreate?: TwitchUserCreateOrConnectWithoutuserInput | undefined;

  @TypeGraphQL.Field(_type => TwitchUserUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: TwitchUserUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TwitchUserWhereUniqueInput, {
    nullable: true
  })
  connect?: TwitchUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TwitchUserUpdateWithoutUserInput, {
    nullable: true
  })
  update?: TwitchUserUpdateWithoutUserInput | undefined;
}
