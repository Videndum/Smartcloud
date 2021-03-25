import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostAvgAggregate } from "../outputs/HostAvgAggregate";
import { HostCountAggregate } from "../outputs/HostCountAggregate";
import { HostMaxAggregate } from "../outputs/HostMaxAggregate";
import { HostMinAggregate } from "../outputs/HostMinAggregate";
import { HostSumAggregate } from "../outputs/HostSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateHost {
  @TypeGraphQL.Field(_type => HostCountAggregate, {
    nullable: true
  })
  count!: HostCountAggregate | null;

  @TypeGraphQL.Field(_type => HostAvgAggregate, {
    nullable: true
  })
  avg!: HostAvgAggregate | null;

  @TypeGraphQL.Field(_type => HostSumAggregate, {
    nullable: true
  })
  sum!: HostSumAggregate | null;

  @TypeGraphQL.Field(_type => HostMinAggregate, {
    nullable: true
  })
  min!: HostMinAggregate | null;

  @TypeGraphQL.Field(_type => HostMaxAggregate, {
    nullable: true
  })
  max!: HostMaxAggregate | null;
}
