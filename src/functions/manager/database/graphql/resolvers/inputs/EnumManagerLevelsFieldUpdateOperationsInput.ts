import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerLevels } from "../../enums/ManagerLevels";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumManagerLevelsFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ManagerLevels, {
    nullable: true
  })
  set?: "ROOT" | "AUTHORISED" | "SHADOW" | "VALIDATOR" | undefined;
}
