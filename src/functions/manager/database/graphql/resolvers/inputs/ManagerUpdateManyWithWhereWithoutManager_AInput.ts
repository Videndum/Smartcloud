import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerScalarWhereInput } from "../inputs/ManagerScalarWhereInput";
import { ManagerUpdateManyMutationInput } from "../inputs/ManagerUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ManagerUpdateManyWithWhereWithoutManager_AInput {
  @TypeGraphQL.Field(_type => ManagerScalarWhereInput, {
    nullable: false
  })
  where!: ManagerScalarWhereInput;

  @TypeGraphQL.Field(_type => ManagerUpdateManyMutationInput, {
    nullable: false
  })
  data!: ManagerUpdateManyMutationInput;
}
