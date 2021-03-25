import * as TypeGraphQL from "type-graphql";

export enum PATScalarFieldEnum {
  id = "id",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  status = "status"
}
TypeGraphQL.registerEnumType(PATScalarFieldEnum, {
  name: "PATScalarFieldEnum",
  description: undefined,
});
