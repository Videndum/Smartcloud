import * as TypeGraphQL from "type-graphql";

export enum DiscordExecutionType {
  JSON = "JSON",
  JS = "JS",
  PY = "PY"
}
TypeGraphQL.registerEnumType(DiscordExecutionType, {
  name: "DiscordExecutionType",
  description: undefined,
});
