import * as TypeGraphQL from "type-graphql";

export enum TransactionScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  completedAt = "completedAt",
  managerId = "managerId",
  patId = "patId",
  suspicious = "suspicious",
  fraudulent = "fraudulent",
  reversedAt = "reversedAt"
}
TypeGraphQL.registerEnumType(TransactionScalarFieldEnum, {
  name: "TransactionScalarFieldEnum",
  description: undefined,
});
