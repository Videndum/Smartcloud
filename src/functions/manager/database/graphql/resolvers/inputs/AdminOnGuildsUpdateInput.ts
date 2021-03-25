import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DiscordUserUpdateOneRequiredWithoutAdministatesInput } from "../inputs/DiscordUserUpdateOneRequiredWithoutAdministatesInput";
import { GuildUpdateOneRequiredWithoutAdminsInput } from "../inputs/GuildUpdateOneRequiredWithoutAdminsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AdminOnGuildsUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateOneRequiredWithoutAdminsInput, {
    nullable: true
  })
  guild?: GuildUpdateOneRequiredWithoutAdminsInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserUpdateOneRequiredWithoutAdministatesInput, {
    nullable: true
  })
  user?: DiscordUserUpdateOneRequiredWithoutAdministatesInput | undefined;
}
