import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumPATStatusFilter } from "../inputs/EnumPATStatusFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PATScalarWhereInput {
  @TypeGraphQL.Field(_type => [PATScalarWhereInput], {
    nullable: true
  })
  AND?: PATScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PATScalarWhereInput], {
    nullable: true
  })
  OR?: PATScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PATScalarWhereInput], {
    nullable: true
  })
  NOT?: PATScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPATStatusFilter, {
    nullable: true
  })
  status?: EnumPATStatusFilter | undefined;
}
