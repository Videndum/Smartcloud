import { TransactionCreateInput } from "../../../inputs/TransactionCreateInput";
import { TransactionUpdateInput } from "../../../inputs/TransactionUpdateInput";
import { TransactionWhereUniqueInput } from "../../../inputs/TransactionWhereUniqueInput";
export declare class UpsertTransactionArgs {
    where: TransactionWhereUniqueInput;
    create: TransactionCreateInput;
    update: TransactionUpdateInput;
}
