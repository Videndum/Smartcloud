import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitchUserUpdateInput } from "../../../inputs/TwitchUserUpdateInput";
import { TwitchUserWhereUniqueInput } from "../../../inputs/TwitchUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTwitchUserArgs {
  @TypeGraphQL.Field(_type => TwitchUserUpdateInput, {
    nullable: false
  })
  data!: TwitchUserUpdateInput;

  @TypeGraphQL.Field(_type => TwitchUserWhereUniqueInput, {
    nullable: false
  })
  where!: TwitchUserWhereUniqueInput;
}
