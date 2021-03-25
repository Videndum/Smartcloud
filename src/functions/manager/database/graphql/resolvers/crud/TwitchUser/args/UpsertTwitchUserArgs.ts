import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitchUserCreateInput } from "../../../inputs/TwitchUserCreateInput";
import { TwitchUserUpdateInput } from "../../../inputs/TwitchUserUpdateInput";
import { TwitchUserWhereUniqueInput } from "../../../inputs/TwitchUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTwitchUserArgs {
  @TypeGraphQL.Field(_type => TwitchUserWhereUniqueInput, {
    nullable: false
  })
  where!: TwitchUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitchUserCreateInput, {
    nullable: false
  })
  create!: TwitchUserCreateInput;

  @TypeGraphQL.Field(_type => TwitchUserUpdateInput, {
    nullable: false
  })
  update!: TwitchUserUpdateInput;
}
