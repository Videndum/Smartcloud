import * as TypeGraphQL from "type-graphql";
import { FindFirstPATArgs } from "./args/FindFirstPATArgs";
import { PAT } from "../../../models/PAT";

@TypeGraphQL.Resolver(_of => PAT)
export class FindFirstPATResolver {
  @TypeGraphQL.Query(_returns => PAT, {
    nullable: true
  })
  async findFirstPAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstPATArgs): Promise<PAT | null> {
    return ctx.prisma.pAT.findFirst(args);
  }
}
