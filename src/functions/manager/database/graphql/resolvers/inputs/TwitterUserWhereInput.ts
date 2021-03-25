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
export class TwitterUserWhereInput {
  @TypeGraphQL.Field(_type => [TwitterUserWhereInput], {
    nullable: true
  })
  AND?: TwitterUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserWhereInput], {
    nullable: true
  })
  OR?: TwitterUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserWhereInput], {
    nullable: true
  })
  NOT?: TwitterUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  discrim?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  userId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
