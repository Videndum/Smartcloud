import * as TypeGraphQL from "type-graphql";
import { UpsertActionArgs } from "./args/UpsertActionArgs";
import { Action } from "../../../models/Action";

@TypeGraphQL.Resolver(_of => Action)
export class UpsertActionResolver {
  @TypeGraphQL.Mutation(_returns => Action, {
    nullable: false
  })
  async upsertAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertActionArgs): Promise<Action> {
    return ctx.prisma.action.upsert(args);
  }
}
