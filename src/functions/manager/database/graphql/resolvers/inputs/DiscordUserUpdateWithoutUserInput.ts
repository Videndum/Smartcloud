import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AdminOnGuildsUpdateManyWithoutUserInput } from "../inputs/AdminOnGuildsUpdateManyWithoutUserInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsersOnGuildsUpdateManyWithoutUserInput } from "../inputs/UsersOnGuildsUpdateManyWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DiscordUserUpdateWithoutUserInput {
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

  @TypeGraphQL.Field(_type => AdminOnGuildsUpdateManyWithoutUserInput, {
    nullable: true
  })
  administates?: AdminOnGuildsUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UsersOnGuildsUpdateManyWithoutUserInput, {
    nullable: true
  })
  UsersOnGuilds?: UsersOnGuildsUpdateManyWithoutUserInput | undefined;
}
