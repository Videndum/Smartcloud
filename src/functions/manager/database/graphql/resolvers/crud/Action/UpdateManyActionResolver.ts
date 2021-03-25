import * as TypeGraphQL from "type-graphql";
import { UpdateManyActionArgs } from "./args/UpdateManyActionArgs";
import { Action } from "../../../models/Action";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Action)
export class UpdateManyActionResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyActionArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.action.updateMany(args);
  }
}
