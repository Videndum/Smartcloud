import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PATStatus } from "../../enums/PATStatus";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PATMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => PATStatus, {
    nullable: true
  })
  status!: "ENABLED" | "DISABLED" | "REVOKED" | "EXPOSED" | null;
}
