import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TwitterUserScalarWhereInput } from "../inputs/TwitterUserScalarWhereInput";
import { TwitterUserUpdateManyMutationInput } from "../inputs/TwitterUserUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitterUserUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => TwitterUserScalarWhereInput, {
    nullable: false
  })
  where!: TwitterUserScalarWhereInput;

  @TypeGraphQL.Field(_type => TwitterUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: TwitterUserUpdateManyMutationInput;
}
