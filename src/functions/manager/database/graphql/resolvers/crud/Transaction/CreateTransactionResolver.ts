import * as TypeGraphQL from "type-graphql";
import { CreateTransactionArgs } from "./args/CreateTransactionArgs";
import { Transaction } from "../../../models/Transaction";

@TypeGraphQL.Resolver(_of => Transaction)
export class CreateTransactionResolver {
  @TypeGraphQL.Mutation(_returns => Transaction, {
    nullable: false
  })
  async createTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTransactionArgs): Promise<Transaction> {
    return ctx.prisma.transaction.create(args);
  }
}
