import * as TypeGraphQL from "type-graphql";
import { UpsertTransactionArgs } from "./args/UpsertTransactionArgs";
import { Transaction } from "../../../models/Transaction";

@TypeGraphQL.Resolver(_of => Transaction)
export class UpsertTransactionResolver {
  @TypeGraphQL.Mutation(_returns => Transaction, {
    nullable: false
  })
  async upsertTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTransactionArgs): Promise<Transaction> {
    return ctx.prisma.transaction.upsert(args);
  }
}
