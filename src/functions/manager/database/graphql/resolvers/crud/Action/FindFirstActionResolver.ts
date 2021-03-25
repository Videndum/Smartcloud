import * as TypeGraphQL from "type-graphql";
import { FindFirstActionArgs } from "./args/FindFirstActionArgs";
import { Action } from "../../../models/Action";

@TypeGraphQL.Resolver(_of => Action)
export class FindFirstActionResolver {
  @TypeGraphQL.Query(_returns => Action, {
    nullable: true
  })
  async findFirstAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstActionArgs): Promise<Action | null> {
    return ctx.prisma.action.findFirst(args);
  }
}
