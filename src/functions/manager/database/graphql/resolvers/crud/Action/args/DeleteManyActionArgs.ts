import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ActionWhereInput } from "../../../inputs/ActionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyActionArgs {
  @TypeGraphQL.Field(_type => ActionWhereInput, {
    nullable: true
  })
  where?: ActionWhereInput | undefined;
}
