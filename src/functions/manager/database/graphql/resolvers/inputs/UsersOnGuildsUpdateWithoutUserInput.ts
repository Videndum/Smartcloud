import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildUpdateOneRequiredWithoutMembersInput } from "../inputs/GuildUpdateOneRequiredWithoutMembersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersOnGuildsUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateOneRequiredWithoutMembersInput, {
    nullable: true
  })
  guild?: GuildUpdateOneRequiredWithoutMembersInput | undefined;
}
