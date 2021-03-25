import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsUpdateWithoutUserInput } from "../inputs/AdminOnGuildsUpdateWithoutUserInput";
import { AdminOnGuildsWhereUniqueInput } from "../inputs/AdminOnGuildsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOnGuildsUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => AdminOnGuildsWhereUniqueInput, {
    nullable: false
  })
  where!: AdminOnGuildsWhereUniqueInput;

  @TypeGraphQL.Field(_type => AdminOnGuildsUpdateWithoutUserInput, {
    nullable: false
  })
  data!: AdminOnGuildsUpdateWithoutUserInput;
}
