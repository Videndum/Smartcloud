import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { ManagerCreateNestedOneWithoutTransactionInput } from "../inputs/ManagerCreateNestedOneWithoutTransactionInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionCreateWithoutPatInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  suspicious?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  fraudulent?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  reversedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ManagerCreateNestedOneWithoutTransactionInput, {
    nullable: false
  })
  responsibleManager!: ManagerCreateNestedOneWithoutTransactionInput;
}
