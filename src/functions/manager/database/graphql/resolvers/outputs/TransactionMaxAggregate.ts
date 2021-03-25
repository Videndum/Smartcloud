import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TransactionMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  managerId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  suspicious!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  fraudulent!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  reversedAt!: Date | null;
}
