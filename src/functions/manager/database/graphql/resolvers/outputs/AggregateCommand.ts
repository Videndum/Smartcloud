import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { CommandAvgAggregate } from "../outputs/CommandAvgAggregate";
import { CommandCountAggregate } from "../outputs/CommandCountAggregate";
import { CommandMaxAggregate } from "../outputs/CommandMaxAggregate";
import { CommandMinAggregate } from "../outputs/CommandMinAggregate";
import { CommandSumAggregate } from "../outputs/CommandSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCommand {
  @TypeGraphQL.Field(_type => CommandCountAggregate, {
    nullable: true
  })
  count!: CommandCountAggregate | null;

  @TypeGraphQL.Field(_type => CommandAvgAggregate, {
    nullable: true
  })
  avg!: CommandAvgAggregate | null;

  @TypeGraphQL.Field(_type => CommandSumAggregate, {
    nullable: true
  })
  sum!: CommandSumAggregate | null;

  @TypeGraphQL.Field(_type => CommandMinAggregate, {
    nullable: true
  })
  min!: CommandMinAggregate | null;

  @TypeGraphQL.Field(_type => CommandMaxAggregate, {
    nullable: true
  })
  max!: CommandMaxAggregate | null;
}
