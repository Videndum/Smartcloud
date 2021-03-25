import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TransactionScalarWhereInput } from "../inputs/TransactionScalarWhereInput";
import { TransactionUpdateManyMutationInput } from "../inputs/TransactionUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionUpdateManyWithWhereWithoutPatInput {
  @TypeGraphQL.Field(_type => TransactionScalarWhereInput, {
    nullable: false
  })
  where!: TransactionScalarWhereInput;

  @TypeGraphQL.Field(_type => TransactionUpdateManyMutationInput, {
    nullable: false
  })
  data!: TransactionUpdateManyMutationInput;
}
