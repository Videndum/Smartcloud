import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumManagerLevelsFilter } from "../inputs/EnumManagerLevelsFilter";
import { IntFilter } from "../inputs/IntFilter";
import { JsonNullableListFilter } from "../inputs/JsonNullableListFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerScalarWhereInput {
  @TypeGraphQL.Field(_type => [ManagerScalarWhereInput], {
    nullable: true
  })
  AND?: ManagerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerScalarWhereInput], {
    nullable: true
  })
  OR?: ManagerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerScalarWhereInput], {
    nullable: true
  })
  NOT?: ManagerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ip?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  port?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumManagerLevelsFilter, {
    nullable: true
  })
  type?: EnumManagerLevelsFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  restartSchedule?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => JsonNullableListFilter, {
    nullable: true
  })
  downtimeHistory?: JsonNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tasksCompleted?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  parentID?: StringNullableFilter | undefined;
}
