import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ShardUpdateManyMutationInput } from "../../../inputs/ShardUpdateManyMutationInput";
import { ShardWhereInput } from "../../../inputs/ShardWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShardArgs {
  @TypeGraphQL.Field(_type => ShardUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShardUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ShardWhereInput, {
    nullable: true
  })
  where?: ShardWhereInput | undefined;
}
