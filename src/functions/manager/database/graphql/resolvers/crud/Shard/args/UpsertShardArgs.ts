import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ShardCreateInput } from "../../../inputs/ShardCreateInput";
import { ShardUpdateInput } from "../../../inputs/ShardUpdateInput";
import { ShardWhereUniqueInput } from "../../../inputs/ShardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertShardArgs {
  @TypeGraphQL.Field(_type => ShardWhereUniqueInput, {
    nullable: false
  })
  where!: ShardWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShardCreateInput, {
    nullable: false
  })
  create!: ShardCreateInput;

  @TypeGraphQL.Field(_type => ShardUpdateInput, {
    nullable: false
  })
  update!: ShardUpdateInput;
}
