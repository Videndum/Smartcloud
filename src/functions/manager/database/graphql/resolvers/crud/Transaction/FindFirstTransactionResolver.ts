import * as TypeGraphQL from "type-graphql";
import { FindFirstTransactionArgs } from "./args/FindFirstTransactionArgs";
import { Transaction } from "../../../models/Transaction";

@TypeGraphQL.Resolver(_of => Transaction)
export class FindFirstTransactionResolver {
  @TypeGraphQL.Query(_returns => Transaction, {
    nullable: true
  })
  async findFirstTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTransactionArgs): Promise<Transaction | null> {
    return ctx.prisma.transaction.findFirst(args);
  }
}
