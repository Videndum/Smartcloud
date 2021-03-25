import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitchAuthUpdateInput } from "../../../inputs/TwitchAuthUpdateInput";
import { TwitchAuthWhereUniqueInput } from "../../../inputs/TwitchAuthWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTwitchAuthArgs {
  @TypeGraphQL.Field(_type => TwitchAuthUpdateInput, {
    nullable: false
  })
  data!: TwitchAuthUpdateInput;

  @TypeGraphQL.Field(_type => TwitchAuthWhereUniqueInput, {
    nullable: false
  })
  where!: TwitchAuthWhereUniqueInput;
}
