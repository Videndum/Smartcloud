import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PATCountAggregate } from "../outputs/PATCountAggregate";
import { PATMaxAggregate } from "../outputs/PATMaxAggregate";
import { PATMinAggregate } from "../outputs/PATMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregatePAT {
  @TypeGraphQL.Field(_type => PATCountAggregate, {
    nullable: true
  })
  count!: PATCountAggregate | null;

  @TypeGraphQL.Field(_type => PATMinAggregate, {
    nullable: true
  })
  min!: PATMinAggregate | null;

  @TypeGraphQL.Field(_type => PATMaxAggregate, {
    nullable: true
  })
  max!: PATMaxAggregate | null;
}
