import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PATStatus } from "../../enums/PATStatus";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumPATStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => PATStatus, {
    nullable: true
  })
  set?: "ENABLED" | "DISABLED" | "REVOKED" | "EXPOSED" | undefined;
}
