import * as TypeGraphQL from "type-graphql";
import { UpdateTransactionArgs } from "./args/UpdateTransactionArgs";
import { Transaction } from "../../../models/Transaction";

@TypeGraphQL.Resolver(_of => Transaction)
export class UpdateTransactionResolver {
  @TypeGraphQL.Mutation(_returns => Transaction, {
    nullable: true
  })
  async updateTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTransactionArgs): Promise<Transaction | null> {
    return ctx.prisma.transaction.update(args);
  }
}
