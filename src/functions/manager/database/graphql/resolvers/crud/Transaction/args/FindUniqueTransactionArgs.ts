import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TransactionWhereUniqueInput } from "../../../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTransactionArgs {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;
}
