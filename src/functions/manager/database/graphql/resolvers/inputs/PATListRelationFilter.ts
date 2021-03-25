import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PATWhereInput } from "../inputs/PATWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PATListRelationFilter {
  @TypeGraphQL.Field(_type => PATWhereInput, {
    nullable: true
  })
  every?: PATWhereInput | undefined;

  @TypeGraphQL.Field(_type => PATWhereInput, {
    nullable: true
  })
  some?: PATWhereInput | undefined;

  @TypeGraphQL.Field(_type => PATWhereInput, {
    nullable: true
  })
  none?: PATWhereInput | undefined;
}
