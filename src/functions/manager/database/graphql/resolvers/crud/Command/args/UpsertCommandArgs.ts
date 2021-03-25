import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CommandCreateInput } from "../../../inputs/CommandCreateInput";
import { CommandUpdateInput } from "../../../inputs/CommandUpdateInput";
import { CommandWhereUniqueInput } from "../../../inputs/CommandWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCommandArgs {
  @TypeGraphQL.Field(_type => CommandWhereUniqueInput, {
    nullable: false
  })
  where!: CommandWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommandCreateInput, {
    nullable: false
  })
  create!: CommandCreateInput;

  @TypeGraphQL.Field(_type => CommandUpdateInput, {
    nullable: false
  })
  update!: CommandUpdateInput;
}
