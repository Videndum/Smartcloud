import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutTwitterUserInput } from "../inputs/UserCreateOrConnectWithoutTwitterUserInput";
import { UserCreateWithoutTwitterUserInput } from "../inputs/UserCreateWithoutTwitterUserInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutTwitterUserInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTwitterUserInput, {
    nullable: true
  })
  create?: UserCreateWithoutTwitterUserInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTwitterUserInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTwitterUserInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
