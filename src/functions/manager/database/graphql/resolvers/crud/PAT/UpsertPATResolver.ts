import * as TypeGraphQL from "type-graphql";
import { UpsertPATArgs } from "./args/UpsertPATArgs";
import { PAT } from "../../../models/PAT";

@TypeGraphQL.Resolver(_of => PAT)
export class UpsertPATResolver {
  @TypeGraphQL.Mutation(_returns => PAT, {
    nullable: false
  })
  async upsertPAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertPATArgs): Promise<PAT> {
    return ctx.prisma.pAT.upsert(args);
  }
}
