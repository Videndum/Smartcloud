import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerAvgAggregate } from "../outputs/ManagerAvgAggregate";
import { ManagerCountAggregate } from "../outputs/ManagerCountAggregate";
import { ManagerMaxAggregate } from "../outputs/ManagerMaxAggregate";
import { ManagerMinAggregate } from "../outputs/ManagerMinAggregate";
import { ManagerSumAggregate } from "../outputs/ManagerSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateManager {
  @TypeGraphQL.Field(_type => ManagerCountAggregate, {
    nullable: true
  })
  count!: ManagerCountAggregate | null;

  @TypeGraphQL.Field(_type => ManagerAvgAggregate, {
    nullable: true
  })
  avg!: ManagerAvgAggregate | null;

  @TypeGraphQL.Field(_type => ManagerSumAggregate, {
    nullable: true
  })
  sum!: ManagerSumAggregate | null;

  @TypeGraphQL.Field(_type => ManagerMinAggregate, {
    nullable: true
  })
  min!: ManagerMinAggregate | null;

  @TypeGraphQL.Field(_type => ManagerMaxAggregate, {
    nullable: true
  })
  max!: ManagerMaxAggregate | null;
}
