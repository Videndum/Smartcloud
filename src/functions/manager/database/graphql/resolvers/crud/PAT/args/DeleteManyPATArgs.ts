import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PATWhereInput } from "../../../inputs/PATWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPATArgs {
  @TypeGraphQL.Field(_type => PATWhereInput, {
    nullable: true
  })
  where?: PATWhereInput | undefined;
}
