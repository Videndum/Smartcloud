import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateNestedManyWithoutManager_AInput } from "../inputs/ManagerCreateNestedManyWithoutManager_AInput";
import { ManagerCreateNestedManyWithoutManager_BInput } from "../inputs/ManagerCreateNestedManyWithoutManager_BInput";
import { ManagerCreateNestedManyWithoutParentManagerInput } from "../inputs/ManagerCreateNestedManyWithoutParentManagerInput";
import { ManagerCreateNestedOneWithoutChildManagersInput } from "../inputs/ManagerCreateNestedOneWithoutChildManagersInput";
import { ManagerCreatedowntimeHistoryInput } from "../inputs/ManagerCreatedowntimeHistoryInput";
import { UserCreateNestedOneWithoutManagerInput } from "../inputs/UserCreateNestedOneWithoutManagerInput";
import { ManagerLevels } from "../../enums/ManagerLevels";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerCreateWithoutTransactionInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ip!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  port?: number | undefined;

  @TypeGraphQL.Field(_type => ManagerLevels, {
    nullable: true
  })
  type?: "ROOT" | "AUTHORISED" | "SHADOW" | "VALIDATOR" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  restartSchedule!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tasksCompleted?: number | undefined;

  @TypeGraphQL.Field(_type => ManagerCreatedowntimeHistoryInput, {
    nullable: true
  })
  downtimeHistory?: ManagerCreatedowntimeHistoryInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutManagerInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutManagerInput;

  @TypeGraphQL.Field(_type => ManagerCreateNestedOneWithoutChildManagersInput, {
    nullable: true
  })
  parentManager?: ManagerCreateNestedOneWithoutChildManagersInput | undefined;

  @TypeGraphQL.Field(_type => ManagerCreateNestedManyWithoutParentManagerInput, {
    nullable: true
  })
  childManagers?: ManagerCreateNestedManyWithoutParentManagerInput | undefined;

  @TypeGraphQL.Field(_type => ManagerCreateNestedManyWithoutManager_AInput, {
    nullable: true
  })
  Manager_B?: ManagerCreateNestedManyWithoutManager_AInput | undefined;

  @TypeGraphQL.Field(_type => ManagerCreateNestedManyWithoutManager_BInput, {
    nullable: true
  })
  Manager_A?: ManagerCreateNestedManyWithoutManager_BInput | undefined;
}
