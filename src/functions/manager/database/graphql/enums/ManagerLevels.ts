import * as TypeGraphQL from "type-graphql";

export enum ManagerLevels {
  ROOT = "ROOT",
  AUTHORISED = "AUTHORISED",
  SHADOW = "SHADOW",
  VALIDATOR = "VALIDATOR"
}
TypeGraphQL.registerEnumType(ManagerLevels, {
  name: "ManagerLevels",
  description: undefined,
});
