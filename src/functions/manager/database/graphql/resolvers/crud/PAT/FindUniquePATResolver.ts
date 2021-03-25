import * as TypeGraphQL from "type-graphql";
import { FindUniquePATArgs } from "./args/FindUniquePATArgs";
import { PAT } from "../../../models/PAT";

@TypeGraphQL.Resolver(_of => PAT)
export class FindUniquePATResolver {
  @TypeGraphQL.Query(_returns => PAT, {
    nullable: true
  })
  async pAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniquePATArgs): Promise<PAT | null> {
    return ctx.prisma.pAT.findUnique(args);
  }
}
