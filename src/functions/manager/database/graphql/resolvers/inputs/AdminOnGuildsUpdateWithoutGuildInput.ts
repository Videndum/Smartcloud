import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DiscordUserUpdateOneRequiredWithoutAdministatesInput } from "../inputs/DiscordUserUpdateOneRequiredWithoutAdministatesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOnGuildsUpdateWithoutGuildInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserUpdateOneRequiredWithoutAdministatesInput, {
    nullable: true
  })
  user?: DiscordUserUpdateOneRequiredWithoutAdministatesInput | undefined;
}
