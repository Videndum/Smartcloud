import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotUpdateManyWithoutTwitchAuthInput } from "../inputs/BotUpdateManyWithoutTwitchAuthInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitchAuthUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  clientID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  twitchSecret?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  sessionSecret?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BotUpdateManyWithoutTwitchAuthInput, {
    nullable: true
  })
  Bot?: BotUpdateManyWithoutTwitchAuthInput | undefined;
}
