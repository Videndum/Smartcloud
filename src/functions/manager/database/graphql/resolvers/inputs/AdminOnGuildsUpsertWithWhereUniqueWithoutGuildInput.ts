import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsCreateWithoutGuildInput } from "../inputs/AdminOnGuildsCreateWithoutGuildInput";
import { AdminOnGuildsUpdateWithoutGuildInput } from "../inputs/AdminOnGuildsUpdateWithoutGuildInput";
import { AdminOnGuildsWhereUniqueInput } from "../inputs/AdminOnGuildsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOnGuildsUpsertWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => AdminOnGuildsWhereUniqueInput, {
    nullable: false
  })
  where!: AdminOnGuildsWhereUniqueInput;

  @TypeGraphQL.Field(_type => AdminOnGuildsUpdateWithoutGuildInput, {
    nullable: false
  })
  update!: AdminOnGuildsUpdateWithoutGuildInput;

  @TypeGraphQL.Field(_type => AdminOnGuildsCreateWithoutGuildInput, {
    nullable: false
  })
  create!: AdminOnGuildsCreateWithoutGuildInput;
}
