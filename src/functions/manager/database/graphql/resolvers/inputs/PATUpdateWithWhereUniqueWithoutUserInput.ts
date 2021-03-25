import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PATUpdateWithoutUserInput } from "../inputs/PATUpdateWithoutUserInput";
import { PATWhereUniqueInput } from "../inputs/PATWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PATUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PATWhereUniqueInput, {
    nullable: false
  })
  where!: PATWhereUniqueInput;

  @TypeGraphQL.Field(_type => PATUpdateWithoutUserInput, {
    nullable: false
  })
  data!: PATUpdateWithoutUserInput;
}
