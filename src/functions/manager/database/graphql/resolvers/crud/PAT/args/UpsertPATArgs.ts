import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PATCreateInput } from "../../../inputs/PATCreateInput";
import { PATUpdateInput } from "../../../inputs/PATUpdateInput";
import { PATWhereUniqueInput } from "../../../inputs/PATWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPATArgs {
  @TypeGraphQL.Field(_type => PATWhereUniqueInput, {
    nullable: false
  })
  where!: PATWhereUniqueInput;

  @TypeGraphQL.Field(_type => PATCreateInput, {
    nullable: false
  })
  create!: PATCreateInput;

  @TypeGraphQL.Field(_type => PATUpdateInput, {
    nullable: false
  })
  update!: PATUpdateInput;
}
