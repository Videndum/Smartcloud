import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpdatedowntimeHistoryInput {
  @TypeGraphQL.Field(_type => [GraphQLJSON], {
    nullable: false
  })
  set!: Prisma.InputJsonValue[];
}
