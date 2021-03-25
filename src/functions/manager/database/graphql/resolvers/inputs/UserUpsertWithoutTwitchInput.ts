import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateWithoutTwitchInput } from "../inputs/UserCreateWithoutTwitchInput";
import { UserUpdateWithoutTwitchInput } from "../inputs/UserUpdateWithoutTwitchInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutTwitchInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTwitchInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTwitchInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTwitchInput, {
    nullable: false
  })
  create!: UserCreateWithoutTwitchInput;
}
