import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CommandWhereUniqueInput } from "../../../inputs/CommandWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCommandArgs {
  @TypeGraphQL.Field(_type => CommandWhereUniqueInput, {
    nullable: false
  })
  where!: CommandWhereUniqueInput;
}
