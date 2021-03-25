import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOnGuildsScalarWhereInput {
  @TypeGraphQL.Field(_type => [AdminOnGuildsScalarWhereInput], {
    nullable: true
  })
  AND?: AdminOnGuildsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsScalarWhereInput], {
    nullable: true
  })
  OR?: AdminOnGuildsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AdminOnGuildsScalarWhereInput], {
    nullable: true
  })
  NOT?: AdminOnGuildsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  guildId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
