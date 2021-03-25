import * as TypeGraphQL from "type-graphql";

export enum TwitchUserScalarFieldEnum {
  id = "id",
  username = "username",
  accessToken = "accessToken",
  refreshToken = "refreshToken",
  userId = "userId"
}
TypeGraphQL.registerEnumType(TwitchUserScalarFieldEnum, {
  name: "TwitchUserScalarFieldEnum",
  description: undefined,
});
