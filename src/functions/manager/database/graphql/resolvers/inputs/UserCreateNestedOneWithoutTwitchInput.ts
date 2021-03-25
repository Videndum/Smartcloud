import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithouttwitchInput } from "../inputs/UserCreateOrConnectWithouttwitchInput";
import { UserCreateWithoutTwitchInput } from "../inputs/UserCreateWithoutTwitchInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutTwitchInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTwitchInput, {
    nullable: true
  })
  create?: UserCreateWithoutTwitchInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithouttwitchInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithouttwitchInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
