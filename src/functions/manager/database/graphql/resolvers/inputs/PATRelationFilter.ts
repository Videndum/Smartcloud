import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PATWhereInput } from "../inputs/PATWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PATRelationFilter {
  @TypeGraphQL.Field(_type => PATWhereInput, {
    nullable: true
  })
  is?: PATWhereInput | undefined;

  @TypeGraphQL.Field(_type => PATWhereInput, {
    nullable: true
  })
  isNot?: PATWhereInput | undefined;
}
