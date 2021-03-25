import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { HostWhereUniqueInput } from "../../../inputs/HostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteHostArgs {
  @TypeGraphQL.Field(_type => HostWhereUniqueInput, {
    nullable: false
  })
  where!: HostWhereUniqueInput;
}
