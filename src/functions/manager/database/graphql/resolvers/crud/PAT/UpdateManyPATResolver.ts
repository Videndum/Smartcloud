import * as TypeGraphQL from "type-graphql";
import { UpdateManyPATArgs } from "./args/UpdateManyPATArgs";
import { PAT } from "../../../models/PAT";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => PAT)
export class UpdateManyPATResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyPATArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.pAT.updateMany(args);
  }
}
