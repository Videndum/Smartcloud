import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitchAuthCreateInput } from "../../../inputs/TwitchAuthCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTwitchAuthArgs {
  @TypeGraphQL.Field(_type => TwitchAuthCreateInput, {
    nullable: false
  })
  data!: TwitchAuthCreateInput;
}
