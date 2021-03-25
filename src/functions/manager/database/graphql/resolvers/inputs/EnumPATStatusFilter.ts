import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { NestedEnumPATStatusFilter } from "../inputs/NestedEnumPATStatusFilter";
import { PATStatus } from "../../enums/PATStatus";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumPATStatusFilter {
  @TypeGraphQL.Field(_type => PATStatus, {
    nullable: true
  })
  equals?: "ENABLED" | "DISABLED" | "REVOKED" | "EXPOSED" | undefined;

  @TypeGraphQL.Field(_type => [PATStatus], {
    nullable: true
  })
  in?: Array<"ENABLED" | "DISABLED" | "REVOKED" | "EXPOSED"> | undefined;

  @TypeGraphQL.Field(_type => [PATStatus], {
    nullable: true
  })
  notIn?: Array<"ENABLED" | "DISABLED" | "REVOKED" | "EXPOSED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPATStatusFilter, {
    nullable: true
  })
  not?: NestedEnumPATStatusFilter | undefined;
}
