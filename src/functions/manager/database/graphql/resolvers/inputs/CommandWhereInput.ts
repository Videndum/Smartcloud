import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumDiscordExecutionTypeFilter } from "../inputs/EnumDiscordExecutionTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommandWhereInput {
  @TypeGraphQL.Field(_type => [CommandWhereInput], {
    nullable: true
  })
  AND?: CommandWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommandWhereInput], {
    nullable: true
  })
  OR?: CommandWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommandWhereInput], {
    nullable: true
  })
  NOT?: CommandWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  registeredAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  usage?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  cost?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumDiscordExecutionTypeFilter, {
    nullable: true
  })
  type?: EnumDiscordExecutionTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  owner?: UserRelationFilter | undefined;
}
