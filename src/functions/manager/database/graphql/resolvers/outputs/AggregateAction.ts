import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ActionAvgAggregate } from "../outputs/ActionAvgAggregate";
import { ActionCountAggregate } from "../outputs/ActionCountAggregate";
import { ActionMaxAggregate } from "../outputs/ActionMaxAggregate";
import { ActionMinAggregate } from "../outputs/ActionMinAggregate";
import { ActionSumAggregate } from "../outputs/ActionSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateAction {
  @TypeGraphQL.Field(_type => ActionCountAggregate, {
    nullable: true
  })
  count!: ActionCountAggregate | null;

  @TypeGraphQL.Field(_type => ActionAvgAggregate, {
    nullable: true
  })
  avg!: ActionAvgAggregate | null;

  @TypeGraphQL.Field(_type => ActionSumAggregate, {
    nullable: true
  })
  sum!: ActionSumAggregate | null;

  @TypeGraphQL.Field(_type => ActionMinAggregate, {
    nullable: true
  })
  min!: ActionMinAggregate | null;

  @TypeGraphQL.Field(_type => ActionMaxAggregate, {
    nullable: true
  })
  max!: ActionMaxAggregate | null;
}
