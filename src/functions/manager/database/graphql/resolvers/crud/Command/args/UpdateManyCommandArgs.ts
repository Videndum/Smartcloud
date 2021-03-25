import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CommandUpdateManyMutationInput } from "../../../inputs/CommandUpdateManyMutationInput";
import { CommandWhereInput } from "../../../inputs/CommandWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCommandArgs {
  @TypeGraphQL.Field(_type => CommandUpdateManyMutationInput, {
    nullable: false
  })
  data!: CommandUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CommandWhereInput, {
    nullable: true
  })
  where?: CommandWhereInput | undefined;
}
