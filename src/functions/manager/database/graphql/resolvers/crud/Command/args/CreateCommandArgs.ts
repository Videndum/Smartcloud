import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CommandCreateInput } from "../../../inputs/CommandCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCommandArgs {
  @TypeGraphQL.Field(_type => CommandCreateInput, {
    nullable: false
  })
  data!: CommandCreateInput;
}
