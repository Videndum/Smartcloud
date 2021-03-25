import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutBotInput } from "../inputs/UserCreateOrConnectWithoutBotInput";
import { UserCreateWithoutBotInput } from "../inputs/UserCreateWithoutBotInput";
import { UserUpdateWithoutBotInput } from "../inputs/UserUpdateWithoutBotInput";
import { UserUpsertWithoutBotInput } from "../inputs/UserUpsertWithoutBotInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutBotInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBotInput, {
    nullable: true
  })
  create?: UserCreateWithoutBotInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBotInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBotInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutBotInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutBotInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutBotInput, {
    nullable: true
  })
  update?: UserUpdateWithoutBotInput | undefined;
}
