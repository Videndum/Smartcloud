import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UsersOnGuildsCreateWithoutUserInput } from "../inputs/UsersOnGuildsCreateWithoutUserInput";
import { UsersOnGuildsUpdateWithoutUserInput } from "../inputs/UsersOnGuildsUpdateWithoutUserInput";
import { UsersOnGuildsWhereUniqueInput } from "../inputs/UsersOnGuildsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersOnGuildsUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UsersOnGuildsWhereUniqueInput, {
    nullable: false
  })
  where!: UsersOnGuildsWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersOnGuildsUpdateWithoutUserInput, {
    nullable: false
  })
  update!: UsersOnGuildsUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => UsersOnGuildsCreateWithoutUserInput, {
    nullable: false
  })
  create!: UsersOnGuildsCreateWithoutUserInput;
}
