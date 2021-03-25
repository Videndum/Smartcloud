import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumPATStatusFilter } from "../inputs/EnumPATStatusFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TransactionListRelationFilter } from "../inputs/TransactionListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PATWhereInput {
  @TypeGraphQL.Field(_type => [PATWhereInput], {
    nullable: true
  })
  AND?: PATWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PATWhereInput], {
    nullable: true
  })
  OR?: PATWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PATWhereInput], {
    nullable: true
  })
  NOT?: PATWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TransactionListRelationFilter, {
    nullable: true
  })
  transaction?: TransactionListRelationFilter | undefined;
}
