import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CommandWhereInput } from "../../../inputs/CommandWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCommandArgs {
  @TypeGraphQL.Field(_type => CommandWhereInput, {
    nullable: true
  })
  where?: CommandWhereInput | undefined;
}
