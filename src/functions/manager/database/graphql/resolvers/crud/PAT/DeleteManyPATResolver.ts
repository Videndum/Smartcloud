import * as TypeGraphQL from "type-graphql";
import { DeleteManyPATArgs } from "./args/DeleteManyPATArgs";
import { PAT } from "../../../models/PAT";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => PAT)
export class DeleteManyPATResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyPATArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.pAT.deleteMany(args);
  }
}
