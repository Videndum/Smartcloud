import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitchUserWhereInput } from "../../../inputs/TwitchUserWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTwitchUserArgs {
  @TypeGraphQL.Field(_type => TwitchUserWhereInput, {
    nullable: true
  })
  where?: TwitchUserWhereInput | undefined;
}
