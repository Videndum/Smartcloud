import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class BotAvgAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  hostsId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  priorityHostId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  twitchAuthId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  recommendedShards!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  currentShards!: number;
}
