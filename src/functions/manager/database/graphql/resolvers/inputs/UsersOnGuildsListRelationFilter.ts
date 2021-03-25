import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UsersOnGuildsWhereInput } from "../inputs/UsersOnGuildsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersOnGuildsListRelationFilter {
  @TypeGraphQL.Field(_type => UsersOnGuildsWhereInput, {
    nullable: true
  })
  every?: UsersOnGuildsWhereInput | undefined;

  @TypeGraphQL.Field(_type => UsersOnGuildsWhereInput, {
    nullable: true
  })
  some?: UsersOnGuildsWhereInput | undefined;

  @TypeGraphQL.Field(_type => UsersOnGuildsWhereInput, {
    nullable: true
  })
  none?: UsersOnGuildsWhereInput | undefined;
}
