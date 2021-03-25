import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutManagerInput } from "../inputs/UserCreateOrConnectWithoutManagerInput";
import { UserCreateWithoutManagerInput } from "../inputs/UserCreateWithoutManagerInput";
import { UserUpdateWithoutManagerInput } from "../inputs/UserUpdateWithoutManagerInput";
import { UserUpsertWithoutManagerInput } from "../inputs/UserUpsertWithoutManagerInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutManagerInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutManagerInput, {
    nullable: true
  })
  create?: UserCreateWithoutManagerInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutManagerInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutManagerInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutManagerInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutManagerInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutManagerInput, {
    nullable: true
  })
  update?: UserUpdateWithoutManagerInput | undefined;
}
