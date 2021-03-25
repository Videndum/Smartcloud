import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitchUserWhereInput {
  @TypeGraphQL.Field(_type => [TwitchUserWhereInput], {
    nullable: true
  })
  AND?: TwitchUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitchUserWhereInput], {
    nullable: true
  })
  OR?: TwitchUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitchUserWhereInput], {
    nullable: true
  })
  NOT?: TwitchUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  accessToken?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  refreshToken?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  userId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
