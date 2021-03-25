import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { HostUpdateManyMutationInput } from "../../../inputs/HostUpdateManyMutationInput";
import { HostWhereInput } from "../../../inputs/HostWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyHostArgs {
  @TypeGraphQL.Field(_type => HostUpdateManyMutationInput, {
    nullable: false
  })
  data!: HostUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => HostWhereInput, {
    nullable: true
  })
  where?: HostWhereInput | undefined;
}
