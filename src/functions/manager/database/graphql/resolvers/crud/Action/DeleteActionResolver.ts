import * as TypeGraphQL from "type-graphql";
import { DeleteActionArgs } from "./args/DeleteActionArgs";
import { Action } from "../../../models/Action";

@TypeGraphQL.Resolver(_of => Action)
export class DeleteActionResolver {
  @TypeGraphQL.Mutation(_returns => Action, {
    nullable: true
  })
  async deleteAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteActionArgs): Promise<Action | null> {
    return ctx.prisma.action.delete(args);
  }
}
