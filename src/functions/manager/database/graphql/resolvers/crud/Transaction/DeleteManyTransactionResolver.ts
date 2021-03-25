import * as TypeGraphQL from "type-graphql";
import { DeleteManyTransactionArgs } from "./args/DeleteManyTransactionArgs";
import { Transaction } from "../../../models/Transaction";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Transaction)
export class DeleteManyTransactionResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTransactionArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.transaction.deleteMany(args);
  }
}
