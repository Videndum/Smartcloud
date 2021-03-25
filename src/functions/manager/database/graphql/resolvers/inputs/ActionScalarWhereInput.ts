import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumDiscordExecutionTypeFilter } from "../inputs/EnumDiscordExecutionTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActionScalarWhereInput {
  @TypeGraphQL.Field(_type => [ActionScalarWhereInput], {
    nullable: true
  })
  AND?: ActionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionScalarWhereInput], {
    nullable: true
  })
  OR?: ActionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionScalarWhereInput], {
    nullable: true
  })
  NOT?: ActionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

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
}
