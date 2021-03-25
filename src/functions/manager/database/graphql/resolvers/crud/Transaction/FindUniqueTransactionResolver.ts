import * as TypeGraphQL from "type-graphql";
import { FindUniqueTransactionArgs } from "./args/FindUniqueTransactionArgs";
import { Transaction } from "../../../models/Transaction";

@TypeGraphQL.Resolver(_of => Transaction)
export class FindUniqueTransactionResolver {
  @TypeGraphQL.Query(_returns => Transaction, {
    nullable: true
  })
  async transaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTransactionArgs): Promise<Transaction | null> {
    return ctx.prisma.transaction.findUnique(args);
  }
}
