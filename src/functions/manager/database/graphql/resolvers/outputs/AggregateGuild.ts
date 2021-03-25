import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { GuildAvgAggregate } from "../outputs/GuildAvgAggregate";
import { GuildCountAggregate } from "../outputs/GuildCountAggregate";
import { GuildMaxAggregate } from "../outputs/GuildMaxAggregate";
import { GuildMinAggregate } from "../outputs/GuildMinAggregate";
import { GuildSumAggregate } from "../outputs/GuildSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateGuild {
  @TypeGraphQL.Field(_type => GuildCountAggregate, {
    nullable: true
  })
  count!: GuildCountAggregate | null;

  @TypeGraphQL.Field(_type => GuildAvgAggregate, {
    nullable: true
  })
  avg!: GuildAvgAggregate | null;

  @TypeGraphQL.Field(_type => GuildSumAggregate, {
    nullable: true
  })
  sum!: GuildSumAggregate | null;

  @TypeGraphQL.Field(_type => GuildMinAggregate, {
    nullable: true
  })
  min!: GuildMinAggregate | null;

  @TypeGraphQL.Field(_type => GuildMaxAggregate, {
    nullable: true
  })
  max!: GuildMaxAggregate | null;
}
