import * as TypeGraphQL from "type-graphql";

export enum CommandScalarFieldEnum {
  id = "id",
  ownerId = "ownerId",
  registeredAt = "registeredAt",
  version = "version",
  usage = "usage",
  cost = "cost",
  type = "type",
  url = "url"
}
TypeGraphQL.registerEnumType(CommandScalarFieldEnum, {
  name: "CommandScalarFieldEnum",
  description: undefined,
});
