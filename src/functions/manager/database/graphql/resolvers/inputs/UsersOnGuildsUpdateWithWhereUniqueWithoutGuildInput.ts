import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UsersOnGuildsUpdateWithoutGuildInput } from "../inputs/UsersOnGuildsUpdateWithoutGuildInput";
import { UsersOnGuildsWhereUniqueInput } from "../inputs/UsersOnGuildsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersOnGuildsUpdateWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => UsersOnGuildsWhereUniqueInput, {
    nullable: false
  })
  where!: UsersOnGuildsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersOnGuildsUpdateWithoutGuildInput, {
    nullable: false
  })
  data!: UsersOnGuildsUpdateWithoutGuildInput;
}
