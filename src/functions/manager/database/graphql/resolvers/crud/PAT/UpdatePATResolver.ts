import * as TypeGraphQL from "type-graphql";
import { UpdatePATArgs } from "./args/UpdatePATArgs";
import { PAT } from "../../../models/PAT";

@TypeGraphQL.Resolver(_of => PAT)
export class UpdatePATResolver {
  @TypeGraphQL.Mutation(_returns => PAT, {
    nullable: true
  })
  async updatePAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdatePATArgs): Promise<PAT | null> {
    return ctx.prisma.pAT.update(args);
  }
}
