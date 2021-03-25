import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordExecutionType } from "../../enums/DiscordExecutionType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumDiscordExecutionTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => DiscordExecutionType, {
    nullable: true
  })
  set?: "JSON" | "JS" | "PY" | undefined;
}
