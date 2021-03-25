import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PATCreateWithoutUserInput } from "../inputs/PATCreateWithoutUserInput";
import { PATUpdateWithoutUserInput } from "../inputs/PATUpdateWithoutUserInput";
import { PATWhereUniqueInput } from "../inputs/PATWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PATUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PATWhereUniqueInput, {
    nullable: false
  })
  where!: PATWhereUniqueInput;

  @TypeGraphQL.Field(_type => PATUpdateWithoutUserInput, {
    nullable: false
  })
  update!: PATUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => PATCreateWithoutUserInput, {
    nullable: false
  })
  create!: PATCreateWithoutUserInput;
}
