import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitterUserScalarWhereInput {
  @TypeGraphQL.Field(_type => [TwitterUserScalarWhereInput], {
    nullable: true
  })
  AND?: TwitterUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserScalarWhereInput], {
    nullable: true
  })
  OR?: TwitterUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserScalarWhereInput], {
    nullable: true
  })
  NOT?: TwitterUserScalarWhereInput[] | undefined;

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
}
