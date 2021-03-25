import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsUpdateWithoutGuildInput } from "../inputs/AdminOnGuildsUpdateWithoutGuildInput";
import { AdminOnGuildsWhereUniqueInput } from "../inputs/AdminOnGuildsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOnGuildsUpdateWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => AdminOnGuildsWhereUniqueInput, {
    nullable: false
  })
  where!: AdminOnGuildsWhereUniqueInput;

  @TypeGraphQL.Field(_type => AdminOnGuildsUpdateWithoutGuildInput, {
    nullable: false
  })
  data!: AdminOnGuildsUpdateWithoutGuildInput;
}
