import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ActionCreateInput } from "../../../inputs/ActionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateActionArgs {
  @TypeGraphQL.Field(_type => ActionCreateInput, {
    nullable: false
  })
  data!: ActionCreateInput;
}
