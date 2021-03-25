import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateWithoutCommandsInput } from "../inputs/UserCreateWithoutCommandsInput";
import { UserUpdateWithoutCommandsInput } from "../inputs/UserUpdateWithoutCommandsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutCommandsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCommandsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCommandsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCommandsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCommandsInput;
}
