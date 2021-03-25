import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutpatInput } from "../inputs/UserCreateOrConnectWithoutpatInput";
import { UserCreateWithoutPatInput } from "../inputs/UserCreateWithoutPatInput";
import { UserUpdateWithoutPatInput } from "../inputs/UserUpdateWithoutPatInput";
import { UserUpsertWithoutPatInput } from "../inputs/UserUpsertWithoutPatInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutPatInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPatInput, {
    nullable: true
  })
  create?: UserCreateWithoutPatInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutpatInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutpatInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPatInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPatInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPatInput, {
    nullable: true
  })
  update?: UserUpdateWithoutPatInput | undefined;
}
