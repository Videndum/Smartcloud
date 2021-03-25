import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { HostCreateInput } from "../../../inputs/HostCreateInput";
import { HostUpdateInput } from "../../../inputs/HostUpdateInput";
import { HostWhereUniqueInput } from "../../../inputs/HostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertHostArgs {
  @TypeGraphQL.Field(_type => HostWhereUniqueInput, {
    nullable: false
  })
  where!: HostWhereUniqueInput;

  @TypeGraphQL.Field(_type => HostCreateInput, {
    nullable: false
  })
  create!: HostCreateInput;

  @TypeGraphQL.Field(_type => HostUpdateInput, {
    nullable: false
  })
  update!: HostUpdateInput;
}
