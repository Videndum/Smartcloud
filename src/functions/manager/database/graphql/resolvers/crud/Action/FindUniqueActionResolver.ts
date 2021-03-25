import * as TypeGraphQL from "type-graphql";
import { FindUniqueActionArgs } from "./args/FindUniqueActionArgs";
import { Action } from "../../../models/Action";

@TypeGraphQL.Resolver(_of => Action)
export class FindUniqueActionResolver {
  @TypeGraphQL.Query(_returns => Action, {
    nullable: true
  })
  async action(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueActionArgs): Promise<Action | null> {
    return ctx.prisma.action.findUnique(args);
  }
}
