import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTransactionArgs } from "./args/AggregateTransactionArgs";
import { CreateTransactionArgs } from "./args/CreateTransactionArgs";
import { DeleteManyTransactionArgs } from "./args/DeleteManyTransactionArgs";
import { DeleteTransactionArgs } from "./args/DeleteTransactionArgs";
import { FindFirstTransactionArgs } from "./args/FindFirstTransactionArgs";
import { FindManyTransactionArgs } from "./args/FindManyTransactionArgs";
import { FindUniqueTransactionArgs } from "./args/FindUniqueTransactionArgs";
import { UpdateManyTransactionArgs } from "./args/UpdateManyTransactionArgs";
import { UpdateTransactionArgs } from "./args/UpdateTransactionArgs";
import { UpsertTransactionArgs } from "./args/UpsertTransactionArgs";
import { Transaction } from "../../../models/Transaction";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTransaction } from "../../outputs/AggregateTransaction";

@TypeGraphQL.Resolver(_of => Transaction)
export class TransactionCrudResolver {
  @TypeGraphQL.Query(_returns => Transaction, {
    nullable: true
  })
  async transaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTransactionArgs): Promise<Transaction | null> {
    return ctx.prisma.transaction.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Transaction, {
    nullable: true
  })
  async findFirstTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTransactionArgs): Promise<Transaction | null> {
    return ctx.prisma.transaction.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Transaction], {
    nullable: false
  })
  async transactions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTransactionArgs): Promise<Transaction[]> {
    return ctx.prisma.transaction.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Transaction, {
    nullable: false
  })
  async createTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTransactionArgs): Promise<Transaction> {
    return ctx.prisma.transaction.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Transaction, {
    nullable: true
  })
  async deleteTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTransactionArgs): Promise<Transaction | null> {
    return ctx.prisma.transaction.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Transaction, {
    nullable: true
  })
  async updateTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTransactionArgs): Promise<Transaction | null> {
    return ctx.prisma.transaction.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTransactionArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.transaction.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTransactionArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.transaction.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Transaction, {
    nullable: false
  })
  async upsertTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTransactionArgs): Promise<Transaction> {
    return ctx.prisma.transaction.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTransaction, {
    nullable: false
  })
  async aggregateTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTransactionArgs): Promise<AggregateTransaction> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          // remove __typename and others
          .filter(([key, value]) => !key.startsWith("__"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.transaction.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
