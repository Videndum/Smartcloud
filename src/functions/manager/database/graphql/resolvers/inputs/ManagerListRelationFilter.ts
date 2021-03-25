import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerWhereInput } from "../inputs/ManagerWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerListRelationFilter {
  @TypeGraphQL.Field(_type => ManagerWhereInput, {
    nullable: true
  })
  every?: ManagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => ManagerWhereInput, {
    nullable: true
  })
  some?: ManagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => ManagerWhereInput, {
    nullable: true
  })
  none?: ManagerWhereInput | undefined;
}
