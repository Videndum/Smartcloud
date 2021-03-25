import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateWithoutBotInput } from "../inputs/UserCreateWithoutBotInput";
import { UserUpdateWithoutBotInput } from "../inputs/UserUpdateWithoutBotInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutBotInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBotInput, {
    nullable: false
  })
  update!: UserUpdateWithoutBotInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBotInput, {
    nullable: false
  })
  create!: UserCreateWithoutBotInput;
}
