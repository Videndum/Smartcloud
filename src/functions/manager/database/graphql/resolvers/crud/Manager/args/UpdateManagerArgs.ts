import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ManagerUpdateInput } from "../../../inputs/ManagerUpdateInput";
import { ManagerWhereUniqueInput } from "../../../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateManagerArgs {
  @TypeGraphQL.Field(_type => ManagerUpdateInput, {
    nullable: false
  })
  data!: ManagerUpdateInput;

  @TypeGraphQL.Field(_type => ManagerWhereUniqueInput, {
    nullable: false
  })
  where!: ManagerWhereUniqueInput;
}
