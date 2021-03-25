import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateNestedOneWithoutTwitchInput } from "../inputs/UserCreateNestedOneWithoutTwitchInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitchUserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  accessToken!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  refreshToken!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTwitchInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutTwitchInput | undefined;
}
