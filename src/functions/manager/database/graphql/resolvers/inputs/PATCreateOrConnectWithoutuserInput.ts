import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PATCreateWithoutUserInput } from "../inputs/PATCreateWithoutUserInput";
import { PATWhereUniqueInput } from "../inputs/PATWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PATCreateOrConnectWithoutuserInput {
  @TypeGraphQL.Field(_type => PATWhereUniqueInput, {
    nullable: false
  })
  where!: PATWhereUniqueInput;

  @TypeGraphQL.Field(_type => PATCreateWithoutUserInput, {
    nullable: false
  })
  create!: PATCreateWithoutUserInput;
}
