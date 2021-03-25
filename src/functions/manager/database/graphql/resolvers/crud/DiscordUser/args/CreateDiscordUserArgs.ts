import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { DiscordUserCreateInput } from "../../../inputs/DiscordUserCreateInput";

@TypeGraphQL.ArgsType()
export class CreateDiscordUserArgs {
  @TypeGraphQL.Field(_type => DiscordUserCreateInput, {
    nullable: false
  })
  data!: DiscordUserCreateInput;
}
