import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { HostUpdateOneWithoutPriorityBotInput } from "../inputs/HostUpdateOneWithoutPriorityBotInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ShardUpdateManyWithoutBotInput } from "../inputs/ShardUpdateManyWithoutBotInput";
import { TwitchAuthUpdateOneRequiredWithoutBotInput } from "../inputs/TwitchAuthUpdateOneRequiredWithoutBotInput";
import { UserUpdateOneRequiredWithoutBotInput } from "../inputs/UserUpdateOneRequiredWithoutBotInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BotUpdateWithoutHostsInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  discordToken?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  twitterToken?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  recommendedShards?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  currentShards?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBotInput, {
    nullable: true
  })
  owner?: UserUpdateOneRequiredWithoutBotInput | undefined;

  @TypeGraphQL.Field(_type => HostUpdateOneWithoutPriorityBotInput, {
    nullable: true
  })
  priorityHost?: HostUpdateOneWithoutPriorityBotInput | undefined;

  @TypeGraphQL.Field(_type => TwitchAuthUpdateOneRequiredWithoutBotInput, {
    nullable: true
  })
  twitchAuth?: TwitchAuthUpdateOneRequiredWithoutBotInput | undefined;

  @TypeGraphQL.Field(_type => ShardUpdateManyWithoutBotInput, {
    nullable: true
  })
  shards?: ShardUpdateManyWithoutBotInput | undefined;
}
