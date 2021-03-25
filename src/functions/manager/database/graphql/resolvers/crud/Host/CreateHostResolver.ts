import * as TypeGraphQL from "type-graphql";
import { CreateHostArgs } from "./args/CreateHostArgs";
import { Host } from "../../../models/Host";

@TypeGraphQL.Resolver(_of => Host)
export class CreateHostResolver {
  @TypeGraphQL.Mutation(_returns => Host, {
    nullable: false
  })
  async createHost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateHostArgs): Promise<Host> {
    return ctx.prisma.host.create(args);
  }
}
