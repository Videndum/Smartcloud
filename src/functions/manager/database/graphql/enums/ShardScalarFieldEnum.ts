import * as TypeGraphQL from "type-graphql";

export enum ShardScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  lanchedAt = "lanchedAt",
  hostId = "hostId",
  botId = "botId",
  status = "status",
  shardID = "shardID"
}
TypeGraphQL.registerEnumType(ShardScalarFieldEnum, {
  name: "ShardScalarFieldEnum",
  description: undefined,
});
