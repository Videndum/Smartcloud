import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateWithoutPatInput } from "../inputs/UserCreateWithoutPatInput";
import { UserUpdateWithoutPatInput } from "../inputs/UserUpdateWithoutPatInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutPatInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPatInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPatInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPatInput, {
    nullable: false
  })
  create!: UserCreateWithoutPatInput;
}
