import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotAvgAggregate } from "../outputs/BotAvgAggregate";
import { BotCountAggregate } from "../outputs/BotCountAggregate";
import { BotMaxAggregate } from "../outputs/BotMaxAggregate";
import { BotMinAggregate } from "../outputs/BotMinAggregate";
import { BotSumAggregate } from "../outputs/BotSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateBot {
  @TypeGraphQL.Field(_type => BotCountAggregate, {
    nullable: true
  })
  count!: BotCountAggregate | null;

  @TypeGraphQL.Field(_type => BotAvgAggregate, {
    nullable: true
  })
  avg!: BotAvgAggregate | null;

  @TypeGraphQL.Field(_type => BotSumAggregate, {
    nullable: true
  })
  sum!: BotSumAggregate | null;

  @TypeGraphQL.Field(_type => BotMinAggregate, {
    nullable: true
  })
  min!: BotMinAggregate | null;

  @TypeGraphQL.Field(_type => BotMaxAggregate, {
    nullable: true
  })
  max!: BotMaxAggregate | null;
}
