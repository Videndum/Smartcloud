import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ShardOrderByInput } from "../../../inputs/ShardOrderByInput";
import { ShardWhereInput } from "../../../inputs/ShardWhereInput";
import { ShardWhereUniqueInput } from "../../../inputs/ShardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateShardArgs {
  @TypeGraphQL.Field(_type => ShardWhereInput, {
    nullable: true
  })
  where?: ShardWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShardOrderByInput], {
    nullable: true
  })
  orderBy?: ShardOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ShardWhereUniqueInput, {
    nullable: true
  })
  cursor?: ShardWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
