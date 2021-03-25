import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { HostUpdateInput } from "../../../inputs/HostUpdateInput";
import { HostWhereUniqueInput } from "../../../inputs/HostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateHostArgs {
  @TypeGraphQL.Field(_type => HostUpdateInput, {
    nullable: false
  })
  data!: HostUpdateInput;

  @TypeGraphQL.Field(_type => HostWhereUniqueInput, {
    nullable: false
  })
  where!: HostWhereUniqueInput;
}
