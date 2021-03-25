import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TwitchAuthAvgAggregate } from "../outputs/TwitchAuthAvgAggregate";
import { TwitchAuthCountAggregate } from "../outputs/TwitchAuthCountAggregate";
import { TwitchAuthMaxAggregate } from "../outputs/TwitchAuthMaxAggregate";
import { TwitchAuthMinAggregate } from "../outputs/TwitchAuthMinAggregate";
import { TwitchAuthSumAggregate } from "../outputs/TwitchAuthSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateTwitchAuth {
  @TypeGraphQL.Field(_type => TwitchAuthCountAggregate, {
    nullable: true
  })
  count!: TwitchAuthCountAggregate | null;

  @TypeGraphQL.Field(_type => TwitchAuthAvgAggregate, {
    nullable: true
  })
  avg!: TwitchAuthAvgAggregate | null;

  @TypeGraphQL.Field(_type => TwitchAuthSumAggregate, {
    nullable: true
  })
  sum!: TwitchAuthSumAggregate | null;

  @TypeGraphQL.Field(_type => TwitchAuthMinAggregate, {
    nullable: true
  })
  min!: TwitchAuthMinAggregate | null;

  @TypeGraphQL.Field(_type => TwitchAuthMaxAggregate, {
    nullable: true
  })
  max!: TwitchAuthMaxAggregate | null;
}
