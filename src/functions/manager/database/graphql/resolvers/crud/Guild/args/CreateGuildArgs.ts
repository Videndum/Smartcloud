import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { GuildCreateInput } from "../../../inputs/GuildCreateInput";

@TypeGraphQL.ArgsType()
export class CreateGuildArgs {
  @TypeGraphQL.Field(_type => GuildCreateInput, {
    nullable: false
  })
  data!: GuildCreateInput;
}
