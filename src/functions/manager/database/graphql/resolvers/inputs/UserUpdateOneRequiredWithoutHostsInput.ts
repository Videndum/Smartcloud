import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutHostsInput } from "../inputs/UserCreateOrConnectWithoutHostsInput";
import { UserCreateWithoutHostsInput } from "../inputs/UserCreateWithoutHostsInput";
import { UserUpdateWithoutHostsInput } from "../inputs/UserUpdateWithoutHostsInput";
import { UserUpsertWithoutHostsInput } from "../inputs/UserUpsertWithoutHostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutHostsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutHostsInput, {
    nullable: true
  })
  create?: UserCreateWithoutHostsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutHostsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutHostsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutHostsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutHostsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutHostsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutHostsInput | undefined;
}
