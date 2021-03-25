import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ActionScalarWhereInput } from "../inputs/ActionScalarWhereInput";
import { ActionUpdateManyMutationInput } from "../inputs/ActionUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActionUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(_type => ActionScalarWhereInput, {
    nullable: false
  })
  where!: ActionScalarWhereInput;

  @TypeGraphQL.Field(_type => ActionUpdateManyMutationInput, {
    nullable: false
  })
  data!: ActionUpdateManyMutationInput;
}
