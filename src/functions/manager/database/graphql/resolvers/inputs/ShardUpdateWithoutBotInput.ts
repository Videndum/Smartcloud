import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumShardStatusFieldUpdateOperationsInput } from "../inputs/EnumShardStatusFieldUpdateOperationsInput";
import { HostUpdateOneRequiredWithoutShardsInput } from "../inputs/HostUpdateOneRequiredWithoutShardsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShardUpdateWithoutBotInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  lanchedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumShardStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumShardStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  shardID?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => HostUpdateOneRequiredWithoutShardsInput, {
    nullable: true
  })
  Host?: HostUpdateOneRequiredWithoutShardsInput | undefined;
}
