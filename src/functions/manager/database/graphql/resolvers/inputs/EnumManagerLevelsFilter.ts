import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { NestedEnumManagerLevelsFilter } from "../inputs/NestedEnumManagerLevelsFilter";
import { ManagerLevels } from "../../enums/ManagerLevels";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumManagerLevelsFilter {
  @TypeGraphQL.Field(_type => ManagerLevels, {
    nullable: true
  })
  equals?: "ROOT" | "AUTHORISED" | "SHADOW" | "VALIDATOR" | undefined;

  @TypeGraphQL.Field(_type => [ManagerLevels], {
    nullable: true
  })
  in?: Array<"ROOT" | "AUTHORISED" | "SHADOW" | "VALIDATOR"> | undefined;

  @TypeGraphQL.Field(_type => [ManagerLevels], {
    nullable: true
  })
  notIn?: Array<"ROOT" | "AUTHORISED" | "SHADOW" | "VALIDATOR"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumManagerLevelsFilter, {
    nullable: true
  })
  not?: NestedEnumManagerLevelsFilter | undefined;
}
