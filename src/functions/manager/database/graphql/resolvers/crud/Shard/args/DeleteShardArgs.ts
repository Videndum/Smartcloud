import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ShardWhereUniqueInput } from "../../../inputs/ShardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteShardArgs {
  @TypeGraphQL.Field(_type => ShardWhereUniqueInput, {
    nullable: false
  })
  where!: ShardWhereUniqueInput;
}
