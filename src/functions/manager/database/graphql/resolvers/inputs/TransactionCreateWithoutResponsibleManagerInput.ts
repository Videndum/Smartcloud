import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PATCreateNestedOneWithoutTransactionInput } from "../inputs/PATCreateNestedOneWithoutTransactionInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionCreateWithoutResponsibleManagerInput {
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

  @TypeGraphQL.Field(_type => PATCreateNestedOneWithoutTransactionInput, {
    nullable: true
  })
  pat?: PATCreateNestedOneWithoutTransactionInput | undefined;
}
