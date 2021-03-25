import { GraphQLResolveInfo } from "graphql";
import { AggregateTransactionArgs } from "./args/AggregateTransactionArgs";
import { AggregateTransaction } from "../../outputs/AggregateTransaction";
export declare class AggregateTransactionResolver {
    aggregateTransaction(ctx: any, info: GraphQLResolveInfo, args: AggregateTransactionArgs): Promise<AggregateTransaction>;
}
