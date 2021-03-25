import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ManagerCreateInput } from "../../../inputs/ManagerCreateInput";
import { ManagerUpdateInput } from "../../../inputs/ManagerUpdateInput";
import { ManagerWhereUniqueInput } from "../../../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertManagerArgs {
  @TypeGraphQL.Field(_type => ManagerWhereUniqueInput, {
    nullable: false
  })
  where!: ManagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => ManagerCreateInput, {
    nullable: false
  })
  create!: ManagerCreateInput;

  @TypeGraphQL.Field(_type => ManagerUpdateInput, {
    nullable: false
  })
  update!: ManagerUpdateInput;
}
