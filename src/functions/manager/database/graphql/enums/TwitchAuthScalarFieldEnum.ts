import * as TypeGraphQL from "type-graphql";

export enum TwitchAuthScalarFieldEnum {
  id = "id",
  clientID = "clientID",
  twitchSecret = "twitchSecret",
  sessionSecret = "sessionSecret"
}
TypeGraphQL.registerEnumType(TwitchAuthScalarFieldEnum, {
  name: "TwitchAuthScalarFieldEnum",
  description: undefined,
});
