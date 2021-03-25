import * as TypeGraphQL from "type-graphql";

export enum ActionScalarFieldEnum {
  id = "id",
  ownerId = "ownerId",
  registeredAt = "registeredAt",
  version = "version",
  usage = "usage",
  cost = "cost",
  type = "type",
  url = "url"
}
TypeGraphQL.registerEnumType(ActionScalarFieldEnum, {
  name: "ActionScalarFieldEnum",
  description: undefined,
});
