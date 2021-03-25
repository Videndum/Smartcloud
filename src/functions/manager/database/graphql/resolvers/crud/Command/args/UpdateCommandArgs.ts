import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CommandUpdateInput } from "../../../inputs/CommandUpdateInput";
import { CommandWhereUniqueInput } from "../../../inputs/CommandWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCommandArgs {
  @TypeGraphQL.Field(_type => CommandUpdateInput, {
    nullable: false
  })
  data!: CommandUpdateInput;

  @TypeGraphQL.Field(_type => CommandWhereUniqueInput, {
    nullable: false
  })
  where!: CommandWhereUniqueInput;
}
