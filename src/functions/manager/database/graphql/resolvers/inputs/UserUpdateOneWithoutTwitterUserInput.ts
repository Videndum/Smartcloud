import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutTwitterUserInput } from "../inputs/UserCreateOrConnectWithoutTwitterUserInput";
import { UserCreateWithoutTwitterUserInput } from "../inputs/UserCreateWithoutTwitterUserInput";
import { UserUpdateWithoutTwitterUserInput } from "../inputs/UserUpdateWithoutTwitterUserInput";
import { UserUpsertWithoutTwitterUserInput } from "../inputs/UserUpsertWithoutTwitterUserInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutTwitterUserInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTwitterUserInput, {
    nullable: true
  })
  create?: UserCreateWithoutTwitterUserInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTwitterUserInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTwitterUserInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTwitterUserInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTwitterUserInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutTwitterUserInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTwitterUserInput | undefined;
}
