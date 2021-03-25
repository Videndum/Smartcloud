import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutdiscordInput } from "../inputs/UserCreateOrConnectWithoutdiscordInput";
import { UserCreateWithoutDiscordInput } from "../inputs/UserCreateWithoutDiscordInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutDiscordInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutDiscordInput, {
    nullable: true
  })
  create?: UserCreateWithoutDiscordInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutdiscordInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutdiscordInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
