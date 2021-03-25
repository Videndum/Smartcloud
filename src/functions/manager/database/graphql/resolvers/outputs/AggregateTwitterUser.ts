import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TwitterUserAvgAggregate } from "../outputs/TwitterUserAvgAggregate";
import { TwitterUserCountAggregate } from "../outputs/TwitterUserCountAggregate";
import { TwitterUserMaxAggregate } from "../outputs/TwitterUserMaxAggregate";
import { TwitterUserMinAggregate } from "../outputs/TwitterUserMinAggregate";
import { TwitterUserSumAggregate } from "../outputs/TwitterUserSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateTwitterUser {
  @TypeGraphQL.Field(_type => TwitterUserCountAggregate, {
    nullable: true
  })
  count!: TwitterUserCountAggregate | null;

  @TypeGraphQL.Field(_type => TwitterUserAvgAggregate, {
    nullable: true
  })
  avg!: TwitterUserAvgAggregate | null;

  @TypeGraphQL.Field(_type => TwitterUserSumAggregate, {
    nullable: true
  })
  sum!: TwitterUserSumAggregate | null;

  @TypeGraphQL.Field(_type => TwitterUserMinAggregate, {
    nullable: true
  })
  min!: TwitterUserMinAggregate | null;

  @TypeGraphQL.Field(_type => TwitterUserMaxAggregate, {
    nullable: true
  })
  max!: TwitterUserMaxAggregate | null;
}
