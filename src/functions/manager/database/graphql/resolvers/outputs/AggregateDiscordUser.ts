import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordUserAvgAggregate } from "../outputs/DiscordUserAvgAggregate";
import { DiscordUserCountAggregate } from "../outputs/DiscordUserCountAggregate";
import { DiscordUserMaxAggregate } from "../outputs/DiscordUserMaxAggregate";
import { DiscordUserMinAggregate } from "../outputs/DiscordUserMinAggregate";
import { DiscordUserSumAggregate } from "../outputs/DiscordUserSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateDiscordUser {
  @TypeGraphQL.Field(_type => DiscordUserCountAggregate, {
    nullable: true
  })
  count!: DiscordUserCountAggregate | null;

  @TypeGraphQL.Field(_type => DiscordUserAvgAggregate, {
    nullable: true
  })
  avg!: DiscordUserAvgAggregate | null;

  @TypeGraphQL.Field(_type => DiscordUserSumAggregate, {
    nullable: true
  })
  sum!: DiscordUserSumAggregate | null;

  @TypeGraphQL.Field(_type => DiscordUserMinAggregate, {
    nullable: true
  })
  min!: DiscordUserMinAggregate | null;

  @TypeGraphQL.Field(_type => DiscordUserMaxAggregate, {
    nullable: true
  })
  max!: DiscordUserMaxAggregate | null;
}
