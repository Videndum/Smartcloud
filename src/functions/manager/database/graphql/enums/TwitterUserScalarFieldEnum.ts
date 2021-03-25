import * as TypeGraphQL from "type-graphql";

export enum TwitterUserScalarFieldEnum {
  id = "id",
  username = "username",
  discrim = "discrim",
  userId = "userId"
}
TypeGraphQL.registerEnumType(TwitterUserScalarFieldEnum, {
  name: "TwitterUserScalarFieldEnum",
  description: undefined,
});
