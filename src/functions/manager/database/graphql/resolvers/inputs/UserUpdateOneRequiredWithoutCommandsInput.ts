import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutcommandsInput } from "../inputs/UserCreateOrConnectWithoutcommandsInput";
import { UserCreateWithoutCommandsInput } from "../inputs/UserCreateWithoutCommandsInput";
import { UserUpdateWithoutCommandsInput } from "../inputs/UserUpdateWithoutCommandsInput";
import { UserUpsertWithoutCommandsInput } from "../inputs/UserUpsertWithoutCommandsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutCommandsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCommandsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCommandsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutcommandsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutcommandsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCommandsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCommandsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCommandsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCommandsInput | undefined;
}
