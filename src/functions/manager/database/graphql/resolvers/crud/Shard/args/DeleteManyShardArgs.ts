import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ShardWhereInput } from "../../../inputs/ShardWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyShardArgs {
  @TypeGraphQL.Field(_type => ShardWhereInput, {
    nullable: true
  })
  where?: ShardWhereInput | undefined;
}
