import * as TypeGraphQL from "type-graphql";
import { UpdateManyTransactionArgs } from "./args/UpdateManyTransactionArgs";
import { Transaction } from "../../../models/Transaction";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Transaction)
export class UpdateManyTransactionResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTransactionArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.transaction.updateMany(args);
  }
}
