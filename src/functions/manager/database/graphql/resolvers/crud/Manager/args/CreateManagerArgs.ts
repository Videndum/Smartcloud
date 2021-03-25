import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ManagerCreateInput } from "../../../inputs/ManagerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateManagerArgs {
  @TypeGraphQL.Field(_type => ManagerCreateInput, {
    nullable: false
  })
  data!: ManagerCreateInput;
}
