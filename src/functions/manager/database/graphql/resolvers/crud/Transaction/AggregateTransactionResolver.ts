import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTransactionArgs } from "./args/AggregateTransactionArgs";
import { Transaction } from "../../../models/Transaction";
import { AggregateTransaction } from "../../outputs/AggregateTransaction";

@TypeGraphQL.Resolver(_of => Transaction)
export class AggregateTransactionResolver {
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
