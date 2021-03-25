import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostWhereInput } from "../inputs/HostWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostRelationFilter {
  @TypeGraphQL.Field(_type => HostWhereInput, {
    nullable: true
  })
  is?: HostWhereInput | undefined;

  @TypeGraphQL.Field(_type => HostWhereInput, {
    nullable: true
  })
  isNot?: HostWhereInput | undefined;
}
