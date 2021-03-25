import * as TypeGraphQL from "type-graphql";
import { CreatePATArgs } from "./args/CreatePATArgs";
import { PAT } from "../../../models/PAT";

@TypeGraphQL.Resolver(_of => PAT)
export class CreatePATResolver {
  @TypeGraphQL.Mutation(_returns => PAT, {
    nullable: false
  })
  async createPAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreatePATArgs): Promise<PAT> {
    return ctx.prisma.pAT.create(args);
  }
}
