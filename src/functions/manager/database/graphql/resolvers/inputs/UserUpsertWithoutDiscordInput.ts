import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateWithoutDiscordInput } from "../inputs/UserCreateWithoutDiscordInput";
import { UserUpdateWithoutDiscordInput } from "../inputs/UserUpdateWithoutDiscordInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutDiscordInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutDiscordInput, {
    nullable: false
  })
  update!: UserUpdateWithoutDiscordInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutDiscordInput, {
    nullable: false
  })
  create!: UserCreateWithoutDiscordInput;
}
