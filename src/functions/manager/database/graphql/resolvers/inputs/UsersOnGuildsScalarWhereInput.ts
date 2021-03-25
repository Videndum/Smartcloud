import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersOnGuildsScalarWhereInput {
  @TypeGraphQL.Field(_type => [UsersOnGuildsScalarWhereInput], {
    nullable: true
  })
  AND?: UsersOnGuildsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsScalarWhereInput], {
    nullable: true
  })
  OR?: UsersOnGuildsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnGuildsScalarWhereInput], {
    nullable: true
  })
  NOT?: UsersOnGuildsScalarWhereInput[] | undefined;

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
