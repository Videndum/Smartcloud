import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { HostCreateInput } from "../../../inputs/HostCreateInput";

@TypeGraphQL.ArgsType()
export class CreateHostArgs {
  @TypeGraphQL.Field(_type => HostCreateInput, {
    nullable: false
  })
  data!: HostCreateInput;
}
