import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ManagerUpdateManyMutationInput } from "../../../inputs/ManagerUpdateManyMutationInput";
import { ManagerWhereInput } from "../../../inputs/ManagerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyManagerArgs {
  @TypeGraphQL.Field(_type => ManagerUpdateManyMutationInput, {
    nullable: false
  })
  data!: ManagerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ManagerWhereInput, {
    nullable: true
  })
  where?: ManagerWhereInput | undefined;
}
