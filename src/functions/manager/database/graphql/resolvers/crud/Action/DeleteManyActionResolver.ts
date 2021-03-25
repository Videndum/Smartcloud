import * as TypeGraphQL from "type-graphql";
import { DeleteManyActionArgs } from "./args/DeleteManyActionArgs";
import { Action } from "../../../models/Action";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Action)
export class DeleteManyActionResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyActionArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.action.deleteMany(args);
  }
}
