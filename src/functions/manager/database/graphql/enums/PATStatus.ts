import * as TypeGraphQL from "type-graphql";

export enum PATStatus {
  ENABLED = "ENABLED",
  DISABLED = "DISABLED",
  REVOKED = "REVOKED",
  EXPOSED = "EXPOSED"
}
TypeGraphQL.registerEnumType(PATStatus, {
  name: "PATStatus",
  description: undefined,
});
