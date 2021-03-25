import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsUpdateManyWithoutUserInput } from "../inputs/AdminOnGuildsUpdateManyWithoutUserInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutDiscordInput } from "../inputs/UserUpdateOneWithoutDiscordInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserUpdateWithoutUsersOnGuildsInput {
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

  @TypeGraphQL.Field(_type => AdminOnGuildsUpdateManyWithoutUserInput, {
    nullable: true
  })
  administates?: AdminOnGuildsUpdateManyWithoutUserInput | undefined;
}
