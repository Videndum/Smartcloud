import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TransactionCountAggregate } from "../outputs/TransactionCountAggregate";
import { TransactionMaxAggregate } from "../outputs/TransactionMaxAggregate";
import { TransactionMinAggregate } from "../outputs/TransactionMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateTransaction {
  @TypeGraphQL.Field(_type => TransactionCountAggregate, {
    nullable: true
  })
  count!: TransactionCountAggregate | null;

  @TypeGraphQL.Field(_type => TransactionMinAggregate, {
    nullable: true
  })
  min!: TransactionMinAggregate | null;

  @TypeGraphQL.Field(_type => TransactionMaxAggregate, {
    nullable: true
  })
  max!: TransactionMaxAggregate | null;
}
