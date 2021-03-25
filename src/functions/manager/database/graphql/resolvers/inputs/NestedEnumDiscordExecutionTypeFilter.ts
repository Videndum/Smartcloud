import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DiscordExecutionType } from "../../enums/DiscordExecutionType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumDiscordExecutionTypeFilter {
  @TypeGraphQL.Field(_type => DiscordExecutionType, {
    nullable: true
  })
  equals?: "JSON" | "JS" | "PY" | undefined;

  @TypeGraphQL.Field(_type => [DiscordExecutionType], {
    nullable: true
  })
  in?: Array<"JSON" | "JS" | "PY"> | undefined;

  @TypeGraphQL.Field(_type => [DiscordExecutionType], {
    nullable: true
  })
  notIn?: Array<"JSON" | "JS" | "PY"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDiscordExecutionTypeFilter, {
    nullable: true
  })
  not?: NestedEnumDiscordExecutionTypeFilter | undefined;
}
