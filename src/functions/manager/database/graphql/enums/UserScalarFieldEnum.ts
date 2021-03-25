import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  password = "password",
  isAdmin = "isAdmin"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
