import * as TypeGraphQL from "type-graphql";
import { CreateActionArgs } from "./args/CreateActionArgs";
import { Action } from "../../../models/Action";

@TypeGraphQL.Resolver(_of => Action)
export class CreateActionResolver {
  @TypeGraphQL.Mutation(_returns => Action, {
    nullable: false
  })
  async createAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateActionArgs): Promise<Action> {
    return ctx.prisma.action.create(args);
  }
}
