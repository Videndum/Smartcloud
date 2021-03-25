import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitchUserWhereUniqueInput } from "../../../inputs/TwitchUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTwitchUserArgs {
  @TypeGraphQL.Field(_type => TwitchUserWhereUniqueInput, {
    nullable: false
  })
  where!: TwitchUserWhereUniqueInput;
}
