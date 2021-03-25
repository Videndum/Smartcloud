import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ShardUpdateInput } from "../../../inputs/ShardUpdateInput";
import { ShardWhereUniqueInput } from "../../../inputs/ShardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateShardArgs {
  @TypeGraphQL.Field(_type => ShardUpdateInput, {
    nullable: false
  })
  data!: ShardUpdateInput;

  @TypeGraphQL.Field(_type => ShardWhereUniqueInput, {
    nullable: false
  })
  where!: ShardWhereUniqueInput;
}
