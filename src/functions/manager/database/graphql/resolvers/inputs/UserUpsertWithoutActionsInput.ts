import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateWithoutActionsInput } from "../inputs/UserCreateWithoutActionsInput";
import { UserUpdateWithoutActionsInput } from "../inputs/UserUpdateWithoutActionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutActionsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutActionsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutActionsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutActionsInput, {
    nullable: false
  })
  create!: UserCreateWithoutActionsInput;
}
