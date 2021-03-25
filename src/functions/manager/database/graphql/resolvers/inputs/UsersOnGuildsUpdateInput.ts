import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DiscordUserUpdateOneRequiredWithoutUsersOnGuildsInput } from "../inputs/DiscordUserUpdateOneRequiredWithoutUsersOnGuildsInput";
import { GuildUpdateOneRequiredWithoutMembersInput } from "../inputs/GuildUpdateOneRequiredWithoutMembersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersOnGuildsUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateOneRequiredWithoutMembersInput, {
    nullable: true
  })
  guild?: GuildUpdateOneRequiredWithoutMembersInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserUpdateOneRequiredWithoutUsersOnGuildsInput, {
    nullable: true
  })
  user?: DiscordUserUpdateOneRequiredWithoutUsersOnGuildsInput | undefined;
}
