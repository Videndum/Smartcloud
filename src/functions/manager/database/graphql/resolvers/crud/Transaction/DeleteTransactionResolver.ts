import * as TypeGraphQL from "type-graphql";
import { DeleteTransactionArgs } from "./args/DeleteTransactionArgs";
import { Transaction } from "../../../models/Transaction";

@TypeGraphQL.Resolver(_of => Transaction)
export class DeleteTransactionResolver {
  @TypeGraphQL.Mutation(_returns => Transaction, {
    nullable: true
  })
  async deleteTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTransactionArgs): Promise<Transaction | null> {
    return ctx.prisma.transaction.delete(args);
  }
}
