import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ActionWhereUniqueInput } from "../../../inputs/ActionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueActionArgs {
  @TypeGraphQL.Field(_type => ActionWhereUniqueInput, {
    nullable: false
  })
  where!: ActionWhereUniqueInput;
}
