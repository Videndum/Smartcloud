import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UsersOnGuildsAvgAggregate } from "../outputs/UsersOnGuildsAvgAggregate";
import { UsersOnGuildsCountAggregate } from "../outputs/UsersOnGuildsCountAggregate";
import { UsersOnGuildsMaxAggregate } from "../outputs/UsersOnGuildsMaxAggregate";
import { UsersOnGuildsMinAggregate } from "../outputs/UsersOnGuildsMinAggregate";
import { UsersOnGuildsSumAggregate } from "../outputs/UsersOnGuildsSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateUsersOnGuilds {
  @TypeGraphQL.Field(_type => UsersOnGuildsCountAggregate, {
    nullable: true
  })
  count!: UsersOnGuildsCountAggregate | null;

  @TypeGraphQL.Field(_type => UsersOnGuildsAvgAggregate, {
    nullable: true
  })
  avg!: UsersOnGuildsAvgAggregate | null;

  @TypeGraphQL.Field(_type => UsersOnGuildsSumAggregate, {
    nullable: true
  })
  sum!: UsersOnGuildsSumAggregate | null;

  @TypeGraphQL.Field(_type => UsersOnGuildsMinAggregate, {
    nullable: true
  })
  min!: UsersOnGuildsMinAggregate | null;

  @TypeGraphQL.Field(_type => UsersOnGuildsMaxAggregate, {
    nullable: true
  })
  max!: UsersOnGuildsMaxAggregate | null;
}
