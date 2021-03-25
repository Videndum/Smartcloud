import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsWhereInput } from "../inputs/AdminOnGuildsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOnGuildsListRelationFilter {
  @TypeGraphQL.Field(_type => AdminOnGuildsWhereInput, {
    nullable: true
  })
  every?: AdminOnGuildsWhereInput | undefined;

  @TypeGraphQL.Field(_type => AdminOnGuildsWhereInput, {
    nullable: true
  })
  some?: AdminOnGuildsWhereInput | undefined;

  @TypeGraphQL.Field(_type => AdminOnGuildsWhereInput, {
    nullable: true
  })
  none?: AdminOnGuildsWhereInput | undefined;
}
