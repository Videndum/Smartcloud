import * as TypeGraphQL from "type-graphql";

export enum DiscordUserScalarFieldEnum {
  id = "id",
  username = "username",
  discrim = "discrim",
  userId = "userId"
}
TypeGraphQL.registerEnumType(DiscordUserScalarFieldEnum, {
  name: "DiscordUserScalarFieldEnum",
  description: undefined,
});
