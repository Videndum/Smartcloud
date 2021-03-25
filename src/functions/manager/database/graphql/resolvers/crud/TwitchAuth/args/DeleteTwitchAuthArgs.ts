import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitchAuthWhereUniqueInput } from "../../../inputs/TwitchAuthWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTwitchAuthArgs {
  @TypeGraphQL.Field(_type => TwitchAuthWhereUniqueInput, {
    nullable: false
  })
  where!: TwitchAuthWhereUniqueInput;
}
