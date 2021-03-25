import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { Manager } from "../models/Manager";
import { PAT } from "../models/PAT";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Transaction {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  managerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patId?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  suspicious!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  fraudulent!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  reversedAt?: Date | null;

  responsibleManager?: Manager;

  pat?: PAT | null;
}
