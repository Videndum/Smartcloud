import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TwitchUserAvgAggregate } from "../outputs/TwitchUserAvgAggregate";
import { TwitchUserCountAggregate } from "../outputs/TwitchUserCountAggregate";
import { TwitchUserMaxAggregate } from "../outputs/TwitchUserMaxAggregate";
import { TwitchUserMinAggregate } from "../outputs/TwitchUserMinAggregate";
import { TwitchUserSumAggregate } from "../outputs/TwitchUserSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateTwitchUser {
  @TypeGraphQL.Field(_type => TwitchUserCountAggregate, {
    nullable: true
  })
  count!: TwitchUserCountAggregate | null;

  @TypeGraphQL.Field(_type => TwitchUserAvgAggregate, {
    nullable: true
  })
  avg!: TwitchUserAvgAggregate | null;

  @TypeGraphQL.Field(_type => TwitchUserSumAggregate, {
    nullable: true
  })
  sum!: TwitchUserSumAggregate | null;

  @TypeGraphQL.Field(_type => TwitchUserMinAggregate, {
    nullable: true
  })
  min!: TwitchUserMinAggregate | null;

  @TypeGraphQL.Field(_type => TwitchUserMaxAggregate, {
    nullable: true
  })
  max!: TwitchUserMaxAggregate | null;
}
