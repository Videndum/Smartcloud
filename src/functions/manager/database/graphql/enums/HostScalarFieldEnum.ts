import * as TypeGraphQL from "type-graphql";

export enum HostScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  ownerId = "ownerId",
  ip = "ip",
  url = "url",
  port = "port",
  shardLimit = "shardLimit"
}
TypeGraphQL.registerEnumType(HostScalarFieldEnum, {
  name: "HostScalarFieldEnum",
  description: undefined,
});
