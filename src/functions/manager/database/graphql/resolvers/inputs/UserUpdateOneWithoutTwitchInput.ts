import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithouttwitchInput } from "../inputs/UserCreateOrConnectWithouttwitchInput";
import { UserCreateWithoutTwitchInput } from "../inputs/UserCreateWithoutTwitchInput";
import { UserUpdateWithoutTwitchInput } from "../inputs/UserUpdateWithoutTwitchInput";
import { UserUpsertWithoutTwitchInput } from "../inputs/UserUpsertWithoutTwitchInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutTwitchInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTwitchInput, {
    nullable: true
  })
  create?: UserCreateWithoutTwitchInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithouttwitchInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithouttwitchInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTwitchInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTwitchInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutTwitchInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTwitchInput | undefined;
}
