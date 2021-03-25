import * as TypeGraphQL from "type-graphql";

export enum ShardStatus {
  REGISTERED = "REGISTERED",
  STARTING = "STARTING",
  ONLINE = "ONLINE",
  DISCONNECTED = "DISCONNECTED",
  EXPIRED = "EXPIRED"
}
TypeGraphQL.registerEnumType(ShardStatus, {
  name: "ShardStatus",
  description: undefined,
});
