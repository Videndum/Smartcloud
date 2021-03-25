import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ManagerRelationFilter } from "../inputs/ManagerRelationFilter";
import { PATRelationFilter } from "../inputs/PATRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionWhereInput {
  @TypeGraphQL.Field(_type => [TransactionWhereInput], {
    nullable: true
  })
  AND?: TransactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereInput], {
    nullable: true
  })
  OR?: TransactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereInput], {
    nullable: true
  })
  NOT?: TransactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  completedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  managerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  patId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  suspicious?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  fraudulent?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  reversedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ManagerRelationFilter, {
    nullable: true
  })
  responsibleManager?: ManagerRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PATRelationFilter, {
    nullable: true
  })
  pat?: PATRelationFilter | undefined;
}
