import * as TypeGraphQL from "type-graphql";

export enum GuildScalarFieldEnum {
  id = "id",
  name = "name"
}
TypeGraphQL.registerEnumType(GuildScalarFieldEnum, {
  name: "GuildScalarFieldEnum",
  description: undefined,
});
