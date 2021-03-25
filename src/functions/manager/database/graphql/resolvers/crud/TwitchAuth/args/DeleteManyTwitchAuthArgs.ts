import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitchAuthWhereInput } from "../../../inputs/TwitchAuthWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTwitchAuthArgs {
  @TypeGraphQL.Field(_type => TwitchAuthWhereInput, {
    nullable: true
  })
  where?: TwitchAuthWhereInput | undefined;
}
