import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateWithoutTwitterUserInput } from "../inputs/UserCreateWithoutTwitterUserInput";
import { UserUpdateWithoutTwitterUserInput } from "../inputs/UserUpdateWithoutTwitterUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutTwitterUserInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTwitterUserInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTwitterUserInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTwitterUserInput, {
    nullable: false
  })
  create!: UserCreateWithoutTwitterUserInput;
}
