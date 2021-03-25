import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { HostWhereInput } from "../inputs/HostWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostListRelationFilter {
  @TypeGraphQL.Field(_type => HostWhereInput, {
    nullable: true
  })
  every?: HostWhereInput | undefined;

  @TypeGraphQL.Field(_type => HostWhereInput, {
    nullable: true
  })
  some?: HostWhereInput | undefined;

  @TypeGraphQL.Field(_type => HostWhereInput, {
    nullable: true
  })
  none?: HostWhereInput | undefined;
}
