import * as TypeGraphQL from "type-graphql";
import { UpdateActionArgs } from "./args/UpdateActionArgs";
import { Action } from "../../../models/Action";

@TypeGraphQL.Resolver(_of => Action)
export class UpdateActionResolver {
  @TypeGraphQL.Mutation(_returns => Action, {
    nullable: true
  })
  async updateAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateActionArgs): Promise<Action | null> {
    return ctx.prisma.action.update(args);
  }
}
