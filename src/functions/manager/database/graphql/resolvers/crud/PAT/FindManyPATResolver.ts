import * as TypeGraphQL from "type-graphql";
import { FindManyPATArgs } from "./args/FindManyPATArgs";
import { PAT } from "../../../models/PAT";

@TypeGraphQL.Resolver(_of => PAT)
export class FindManyPATResolver {
  @TypeGraphQL.Query(_returns => [PAT], {
    nullable: false
  })
  async pATS(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyPATArgs): Promise<PAT[]> {
    return ctx.prisma.pAT.findMany(args);
  }
}
