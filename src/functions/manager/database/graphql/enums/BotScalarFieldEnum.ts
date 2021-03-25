import * as TypeGraphQL from "type-graphql";

export enum BotScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  ownerId = "ownerId",
  hostsId = "hostsId",
  priorityHostId = "priorityHostId",
  discordToken = "discordToken",
  twitterToken = "twitterToken",
  twitchAuthId = "twitchAuthId",
  recommendedShards = "recommendedShards",
  currentShards = "currentShards"
}
TypeGraphQL.registerEnumType(BotScalarFieldEnum, {
  name: "BotScalarFieldEnum",
  description: undefined,
});
