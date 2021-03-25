import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutHostsInput } from "../inputs/UserCreateOrConnectWithoutHostsInput";
import { UserCreateWithoutHostsInput } from "../inputs/UserCreateWithoutHostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutHostsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutHostsInput, {
    nullable: true
  })
  create?: UserCreateWithoutHostsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutHostsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutHostsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
