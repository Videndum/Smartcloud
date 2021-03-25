import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumManagerLevelsFilter } from "../inputs/EnumManagerLevelsFilter";
import { IntFilter } from "../inputs/IntFilter";
import { JsonNullableListFilter } from "../inputs/JsonNullableListFilter";
import { ManagerListRelationFilter } from "../inputs/ManagerListRelationFilter";
import { ManagerRelationFilter } from "../inputs/ManagerRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TransactionListRelationFilter } from "../inputs/TransactionListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerWhereInput {
  @TypeGraphQL.Field(_type => [ManagerWhereInput], {
    nullable: true
  })
  AND?: ManagerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerWhereInput], {
    nullable: true
  })
  OR?: ManagerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ManagerWhereInput], {
    nullable: true
  })
  NOT?: ManagerWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  owner?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ManagerRelationFilter, {
    nullable: true
  })
  parentManager?: ManagerRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ManagerListRelationFilter, {
    nullable: true
  })
  childManagers?: ManagerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TransactionListRelationFilter, {
    nullable: true
  })
  transaction?: TransactionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ManagerListRelationFilter, {
    nullable: true
  })
  Manager_B?: ManagerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ManagerListRelationFilter, {
    nullable: true
  })
  Manager_A?: ManagerListRelationFilter | undefined;
}
