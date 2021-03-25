import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { Transaction } from "../models/Transaction";
import { User } from "../models/User";
import { PATStatus } from "../enums/PATStatus";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PAT {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => PATStatus, {
    nullable: false
  })
  status!: "ENABLED" | "DISABLED" | "REVOKED" | "EXPOSED";

  user?: User;

  transaction?: Transaction[];
}
