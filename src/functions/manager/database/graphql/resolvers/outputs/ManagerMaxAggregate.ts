import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerLevels } from "../../enums/ManagerLevels";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ManagerMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ownerId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ip!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  port!: number;

  @TypeGraphQL.Field(_type => ManagerLevels, {
    nullable: true
  })
  type!: "ROOT" | "AUTHORISED" | "SHADOW" | "VALIDATOR" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restartSchedule!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tasksCompleted!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentID!: string | null;
}
