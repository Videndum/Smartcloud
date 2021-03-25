import * as TypeGraphQL from "type-graphql";
import { PAT } from "../../../models/PAT";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { PATTransactionArgs } from "./args/PATTransactionArgs";

@TypeGraphQL.Resolver(_of => PAT)
export class PATRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() pAT: PAT, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.pAT.findUnique({
      where: {
        id: pAT.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [Transaction], {
    nullable: false
  })
  async transaction(@TypeGraphQL.Root() pAT: PAT, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PATTransactionArgs): Promise<Transaction[]> {
    return ctx.prisma.pAT.findUnique({
      where: {
        id: pAT.id,
      },
    }).transaction(args);
  }
}
