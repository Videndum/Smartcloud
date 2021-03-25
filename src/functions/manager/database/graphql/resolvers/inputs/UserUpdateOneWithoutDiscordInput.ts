import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutdiscordInput } from "../inputs/UserCreateOrConnectWithoutdiscordInput";
import { UserCreateWithoutDiscordInput } from "../inputs/UserCreateWithoutDiscordInput";
import { UserUpdateWithoutDiscordInput } from "../inputs/UserUpdateWithoutDiscordInput";
import { UserUpsertWithoutDiscordInput } from "../inputs/UserUpsertWithoutDiscordInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutDiscordInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutDiscordInput, {
    nullable: true
  })
  create?: UserCreateWithoutDiscordInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutdiscordInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutdiscordInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutDiscordInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutDiscordInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutDiscordInput, {
    nullable: true
  })
  update?: UserUpdateWithoutDiscordInput | undefined;
}
