import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BoolFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  set?: boolean | undefined;
}
