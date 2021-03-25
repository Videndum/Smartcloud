import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PATUpdateManyMutationInput } from "../../../inputs/PATUpdateManyMutationInput";
import { PATWhereInput } from "../../../inputs/PATWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPATArgs {
  @TypeGraphQL.Field(_type => PATUpdateManyMutationInput, {
    nullable: false
  })
  data!: PATUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PATWhereInput, {
    nullable: true
  })
  where?: PATWhereInput | undefined;
}
