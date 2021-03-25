import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { TransactionCreateNestedManyWithoutPatInput } from "../inputs/TransactionCreateNestedManyWithoutPatInput";
import { UserCreateNestedOneWithoutPatInput } from "../inputs/UserCreateNestedOneWithoutPatInput";
import { PATStatus } from "../../enums/PATStatus";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PATCreateInput {
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
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PATStatus, {
    nullable: true
  })
  status?: "ENABLED" | "DISABLED" | "REVOKED" | "EXPOSED" | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPatInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutPatInput;

  @TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutPatInput, {
    nullable: true
  })
  transaction?: TransactionCreateNestedManyWithoutPatInput | undefined;
}
