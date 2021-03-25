import * as TypeGraphQL from "type-graphql";
import { FindManyActionArgs } from "./args/FindManyActionArgs";
import { Action } from "../../../models/Action";

@TypeGraphQL.Resolver(_of => Action)
export class FindManyActionResolver {
  @TypeGraphQL.Query(_returns => [Action], {
    nullable: false
  })
  async actions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyActionArgs): Promise<Action[]> {
    return ctx.prisma.action.findMany(args);
  }
}
