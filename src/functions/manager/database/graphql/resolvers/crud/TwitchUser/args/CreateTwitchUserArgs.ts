import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitchUserCreateInput } from "../../../inputs/TwitchUserCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTwitchUserArgs {
  @TypeGraphQL.Field(_type => TwitchUserCreateInput, {
    nullable: false
  })
  data!: TwitchUserCreateInput;
}
