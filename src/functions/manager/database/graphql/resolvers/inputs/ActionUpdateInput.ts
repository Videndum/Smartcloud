import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumDiscordExecutionTypeFieldUpdateOperationsInput } from "../inputs/EnumDiscordExecutionTypeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutActionsInput } from "../inputs/UserUpdateOneRequiredWithoutActionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActionUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  registeredAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  version?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  usage?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  cost?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumDiscordExecutionTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumDiscordExecutionTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  url?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutActionsInput, {
    nullable: true
  })
  owner?: UserUpdateOneRequiredWithoutActionsInput | undefined;
}
