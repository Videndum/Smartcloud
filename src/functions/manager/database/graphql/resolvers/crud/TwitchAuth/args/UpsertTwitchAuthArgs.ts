import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitchAuthCreateInput } from "../../../inputs/TwitchAuthCreateInput";
import { TwitchAuthUpdateInput } from "../../../inputs/TwitchAuthUpdateInput";
import { TwitchAuthWhereUniqueInput } from "../../../inputs/TwitchAuthWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTwitchAuthArgs {
  @TypeGraphQL.Field(_type => TwitchAuthWhereUniqueInput, {
    nullable: false
  })
  where!: TwitchAuthWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitchAuthCreateInput, {
    nullable: false
  })
  create!: TwitchAuthCreateInput;

  @TypeGraphQL.Field(_type => TwitchAuthUpdateInput, {
    nullable: false
  })
  update!: TwitchAuthUpdateInput;
}
