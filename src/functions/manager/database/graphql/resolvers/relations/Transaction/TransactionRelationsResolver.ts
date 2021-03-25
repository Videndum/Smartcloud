import * as TypeGraphQL from "type-graphql";
import { Manager } from "../../../models/Manager";
import { PAT } from "../../../models/PAT";
import { Transaction } from "../../../models/Transaction";

@TypeGraphQL.Resolver(_of => Transaction)
export class TransactionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Manager, {
    nullable: false
  })
  async responsibleManager(@TypeGraphQL.Root() transaction: Transaction, @TypeGraphQL.Ctx() ctx: any): Promise<Manager> {
    return ctx.prisma.transaction.findUnique({
      where: {
        id: transaction.id,
      },
    }).responsibleManager({});
  }

  @TypeGraphQL.FieldResolver(_type => PAT, {
    nullable: true
  })
  async pat(@TypeGraphQL.Root() transaction: Transaction, @TypeGraphQL.Ctx() ctx: any): Promise<PAT | null> {
    return ctx.prisma.transaction.findUnique({
      where: {
        id: transaction.id,
      },
    }).pat({});
  }
}
