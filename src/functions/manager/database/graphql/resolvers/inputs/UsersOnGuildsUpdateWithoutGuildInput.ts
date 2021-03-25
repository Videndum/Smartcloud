import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DiscordUserUpdateOneRequiredWithoutUsersOnGuildsInput } from "../inputs/DiscordUserUpdateOneRequiredWithoutUsersOnGuildsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersOnGuildsUpdateWithoutGuildInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserUpdateOneRequiredWithoutUsersOnGuildsInput, {
    nullable: true
  })
  user?: DiscordUserUpdateOneRequiredWithoutUsersOnGuildsInput | undefined;
}
