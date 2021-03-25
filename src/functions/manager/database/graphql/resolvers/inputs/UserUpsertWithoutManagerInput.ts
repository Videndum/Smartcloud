import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateWithoutManagerInput } from "../inputs/UserCreateWithoutManagerInput";
import { UserUpdateWithoutManagerInput } from "../inputs/UserUpdateWithoutManagerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutManagerInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutManagerInput, {
    nullable: false
  })
  update!: UserUpdateWithoutManagerInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutManagerInput, {
    nullable: false
  })
  create!: UserCreateWithoutManagerInput;
}
