import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateNestedOneWithoutTwitterUserInput } from "../inputs/UserCreateNestedOneWithoutTwitterUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitterUserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discrim!: number;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTwitterUserInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutTwitterUserInput | undefined;
}
