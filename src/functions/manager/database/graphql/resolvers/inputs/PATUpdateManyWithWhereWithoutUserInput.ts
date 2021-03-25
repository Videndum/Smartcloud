import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PATScalarWhereInput } from "../inputs/PATScalarWhereInput";
import { PATUpdateManyMutationInput } from "../inputs/PATUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PATUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => PATScalarWhereInput, {
    nullable: false
  })
  where!: PATScalarWhereInput;

  @TypeGraphQL.Field(_type => PATUpdateManyMutationInput, {
    nullable: false
  })
  data!: PATUpdateManyMutationInput;
}
