import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ShardCreateInput } from "../../../inputs/ShardCreateInput";

@TypeGraphQL.ArgsType()
export class CreateShardArgs {
  @TypeGraphQL.Field(_type => ShardCreateInput, {
    nullable: false
  })
  data!: ShardCreateInput;
}
