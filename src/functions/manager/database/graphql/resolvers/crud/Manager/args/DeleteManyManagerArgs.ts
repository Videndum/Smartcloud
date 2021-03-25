import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ManagerWhereInput } from "../../../inputs/ManagerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyManagerArgs {
  @TypeGraphQL.Field(_type => ManagerWhereInput, {
    nullable: true
  })
  where?: ManagerWhereInput | undefined;
}
