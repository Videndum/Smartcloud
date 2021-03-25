import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateWithoutHostsInput } from "../inputs/UserCreateWithoutHostsInput";
import { UserUpdateWithoutHostsInput } from "../inputs/UserUpdateWithoutHostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutHostsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutHostsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutHostsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutHostsInput, {
    nullable: false
  })
  create!: UserCreateWithoutHostsInput;
}
