import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPATStatusFieldUpdateOperationsInput } from "../inputs/EnumPATStatusFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutPatInput } from "../inputs/TransactionUpdateManyWithoutPatInput";
import { UserUpdateOneRequiredWithoutPatInput } from "../inputs/UserUpdateOneRequiredWithoutPatInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PATUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumPATStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumPATStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPatInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutPatInput | undefined;

  @TypeGraphQL.Field(_type => TransactionUpdateManyWithoutPatInput, {
    nullable: true
  })
  transaction?: TransactionUpdateManyWithoutPatInput | undefined;
}
