import * as TypeGraphQL from "type-graphql";

export enum TransactionTypes {
  DISCORD = "DISCORD",
  TWITCH = "TWITCH",
  TWITTER = "TWITTER",
  COMMERSE = "COMMERSE"
}
TypeGraphQL.registerEnumType(TransactionTypes, {
  name: "TransactionTypes",
  description: undefined,
});
