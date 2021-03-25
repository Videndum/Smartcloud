import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { DiscordUserWhereUniqueInput } from "../../../inputs/DiscordUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDiscordUserArgs {
  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: false
  })
  where!: DiscordUserWhereUniqueInput;
}
