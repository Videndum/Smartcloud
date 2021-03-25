import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TwitterUserCreateOrConnectWithoutuserInput } from "../inputs/TwitterUserCreateOrConnectWithoutuserInput";
import { TwitterUserCreateWithoutUserInput } from "../inputs/TwitterUserCreateWithoutUserInput";
import { TwitterUserWhereUniqueInput } from "../inputs/TwitterUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TwitterUserCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TwitterUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: TwitterUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserCreateOrConnectWithoutuserInput], {
    nullable: true
  })
  connectOrCreate?: TwitterUserCreateOrConnectWithoutuserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserWhereUniqueInput], {
    nullable: true
  })
  connect?: TwitterUserWhereUniqueInput[] | undefined;
}
