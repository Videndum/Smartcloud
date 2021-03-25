import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutBotInput } from "../inputs/UserCreateOrConnectWithoutBotInput";
import { UserCreateWithoutBotInput } from "../inputs/UserCreateWithoutBotInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutBotInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBotInput, {
    nullable: true
  })
  create?: UserCreateWithoutBotInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBotInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBotInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
