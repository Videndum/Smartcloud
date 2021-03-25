import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { Transaction } from "../models/Transaction";
import { User } from "../models/User";
import { ManagerLevels } from "../enums/ManagerLevels";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Manager {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ownerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ip!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  port!: number;

  @TypeGraphQL.Field(_type => ManagerLevels, {
    nullable: false
  })
  type!: "ROOT" | "AUTHORISED" | "SHADOW" | "VALIDATOR";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  restartSchedule!: string;

  @TypeGraphQL.Field(_type => [GraphQLJSON], {
    nullable: false
  })
  downtimeHistory!: Prisma.JsonValue[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tasksCompleted!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentID?: string | null;

  owner?: User;

  parentManager?: Manager | null;

  childManagers?: Manager[];

  transaction?: Transaction[];

  Manager_B?: Manager[];

  Manager_A?: Manager[];
}
