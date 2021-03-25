import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutDiscordInput } from "../inputs/UserUpdateOneWithoutDiscordInput";
import { UsersOnGuildsUpdateManyWithoutUserInput } from "../inputs/UsersOnGuildsUpdateManyWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserUpdateWithoutAdministatesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  discrim?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutDiscordInput, {
    nullable: true
  })
  user?: UserUpdateOneWithoutDiscordInput | undefined;

  @TypeGraphQL.Field(_type => UsersOnGuildsUpdateManyWithoutUserInput, {
    nullable: true
  })
  UsersOnGuilds?: UsersOnGuildsUpdateManyWithoutUserInput | undefined;
}
