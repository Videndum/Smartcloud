import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { DiscordUserUpdateInput } from "../../../inputs/DiscordUserUpdateInput";
import { DiscordUserWhereUniqueInput } from "../../../inputs/DiscordUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateDiscordUserArgs {
  @TypeGraphQL.Field(_type => DiscordUserUpdateInput, {
    nullable: false
  })
  data!: DiscordUserUpdateInput;

  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: false
  })
  where!: DiscordUserWhereUniqueInput;
}
