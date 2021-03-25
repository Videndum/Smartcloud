import * as TypeGraphQL from "type-graphql";
import { DeletePATArgs } from "./args/DeletePATArgs";
import { PAT } from "../../../models/PAT";

@TypeGraphQL.Resolver(_of => PAT)
export class DeletePATResolver {
  @TypeGraphQL.Mutation(_returns => PAT, {
    nullable: true
  })
  async deletePAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeletePATArgs): Promise<PAT | null> {
    return ctx.prisma.pAT.delete(args);
  }
}
