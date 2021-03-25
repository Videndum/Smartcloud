import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ManagerWhereUniqueInput } from "../../../inputs/ManagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteManagerArgs {
  @TypeGraphQL.Field(_type => ManagerWhereUniqueInput, {
    nullable: false
  })
  where!: ManagerWhereUniqueInput;
}
