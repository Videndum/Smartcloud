import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ShardAvgAggregate } from "../outputs/ShardAvgAggregate";
import { ShardCountAggregate } from "../outputs/ShardCountAggregate";
import { ShardMaxAggregate } from "../outputs/ShardMaxAggregate";
import { ShardMinAggregate } from "../outputs/ShardMinAggregate";
import { ShardSumAggregate } from "../outputs/ShardSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateShard {
  @TypeGraphQL.Field(_type => ShardCountAggregate, {
    nullable: true
  })
  count!: ShardCountAggregate | null;

  @TypeGraphQL.Field(_type => ShardAvgAggregate, {
    nullable: true
  })
  avg!: ShardAvgAggregate | null;

  @TypeGraphQL.Field(_type => ShardSumAggregate, {
    nullable: true
  })
  sum!: ShardSumAggregate | null;

  @TypeGraphQL.Field(_type => ShardMinAggregate, {
    nullable: true
  })
  min!: ShardMinAggregate | null;

  @TypeGraphQL.Field(_type => ShardMaxAggregate, {
    nullable: true
  })
  max!: ShardMaxAggregate | null;
}
