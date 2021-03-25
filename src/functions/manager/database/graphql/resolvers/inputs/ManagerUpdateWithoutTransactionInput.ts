import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumManagerLevelsFieldUpdateOperationsInput } from "../inputs/EnumManagerLevelsFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ManagerUpdateManyWithoutManager_AInput } from "../inputs/ManagerUpdateManyWithoutManager_AInput";
import { ManagerUpdateManyWithoutManager_BInput } from "../inputs/ManagerUpdateManyWithoutManager_BInput";
import { ManagerUpdateManyWithoutParentManagerInput } from "../inputs/ManagerUpdateManyWithoutParentManagerInput";
import { ManagerUpdateOneWithoutChildManagersInput } from "../inputs/ManagerUpdateOneWithoutChildManagersInput";
import { ManagerUpdatedowntimeHistoryInput } from "../inputs/ManagerUpdatedowntimeHistoryInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutManagerInput } from "../inputs/UserUpdateOneRequiredWithoutManagerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpdateWithoutTransactionInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  ip?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  url?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  port?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumManagerLevelsFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumManagerLevelsFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  restartSchedule?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  tasksCompleted?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ManagerUpdatedowntimeHistoryInput, {
    nullable: true
  })
  downtimeHistory?: ManagerUpdatedowntimeHistoryInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutManagerInput, {
    nullable: true
  })
  owner?: UserUpdateOneRequiredWithoutManagerInput | undefined;

  @TypeGraphQL.Field(_type => ManagerUpdateOneWithoutChildManagersInput, {
    nullable: true
  })
  parentManager?: ManagerUpdateOneWithoutChildManagersInput | undefined;

  @TypeGraphQL.Field(_type => ManagerUpdateManyWithoutParentManagerInput, {
    nullable: true
  })
  childManagers?: ManagerUpdateManyWithoutParentManagerInput | undefined;

  @TypeGraphQL.Field(_type => ManagerUpdateManyWithoutManager_AInput, {
    nullable: true
  })
  Manager_B?: ManagerUpdateManyWithoutManager_AInput | undefined;

  @TypeGraphQL.Field(_type => ManagerUpdateManyWithoutManager_BInput, {
    nullable: true
  })
  Manager_A?: ManagerUpdateManyWithoutManager_BInput | undefined;
}
