import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsAvgAggregate } from "../outputs/AdminOnGuildsAvgAggregate";
import { AdminOnGuildsCountAggregate } from "../outputs/AdminOnGuildsCountAggregate";
import { AdminOnGuildsMaxAggregate } from "../outputs/AdminOnGuildsMaxAggregate";
import { AdminOnGuildsMinAggregate } from "../outputs/AdminOnGuildsMinAggregate";
import { AdminOnGuildsSumAggregate } from "../outputs/AdminOnGuildsSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateAdminOnGuilds {
  @TypeGraphQL.Field(_type => AdminOnGuildsCountAggregate, {
    nullable: true
  })
  count!: AdminOnGuildsCountAggregate | null;

  @TypeGraphQL.Field(_type => AdminOnGuildsAvgAggregate, {
    nullable: true
  })
  avg!: AdminOnGuildsAvgAggregate | null;

  @TypeGraphQL.Field(_type => AdminOnGuildsSumAggregate, {
    nullable: true
  })
  sum!: AdminOnGuildsSumAggregate | null;

  @TypeGraphQL.Field(_type => AdminOnGuildsMinAggregate, {
    nullable: true
  })
  min!: AdminOnGuildsMinAggregate | null;

  @TypeGraphQL.Field(_type => AdminOnGuildsMaxAggregate, {
    nullable: true
  })
  max!: AdminOnGuildsMaxAggregate | null;
}
