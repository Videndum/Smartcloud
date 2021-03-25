import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerWhereInput } from "../inputs/ManagerWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerRelationFilter {
  @TypeGraphQL.Field(_type => ManagerWhereInput, {
    nullable: true
  })
  is?: ManagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => ManagerWhereInput, {
    nullable: true
  })
  isNot?: ManagerWhereInput | undefined;
}
