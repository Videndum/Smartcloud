import * as TypeGraphQL from "type-graphql";
import { FindManyTransactionArgs } from "./args/FindManyTransactionArgs";
import { Transaction } from "../../../models/Transaction";

@TypeGraphQL.Resolver(_of => Transaction)
export class FindManyTransactionResolver {
  @TypeGraphQL.Query(_returns => [Transaction], {
    nullable: false
  })
  async transactions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTransactionArgs): Promise<Transaction[]> {
    return ctx.prisma.transaction.findMany(args);
  }
}
