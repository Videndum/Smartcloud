import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { HostWhereInput } from "../../../inputs/HostWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyHostArgs {
  @TypeGraphQL.Field(_type => HostWhereInput, {
    nullable: true
  })
  where?: HostWhereInput | undefined;
}
