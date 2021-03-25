import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PATCreateInput } from "../../../inputs/PATCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePATArgs {
  @TypeGraphQL.Field(_type => PATCreateInput, {
    nullable: false
  })
  data!: PATCreateInput;
}
