import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutactionsInput } from "../inputs/UserCreateOrConnectWithoutactionsInput";
import { UserCreateWithoutActionsInput } from "../inputs/UserCreateWithoutActionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutActionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutActionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutActionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutactionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutactionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
