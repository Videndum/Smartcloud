import * as TypeGraphQL from "type-graphql";
import { FindFirstHostArgs } from "./args/FindFirstHostArgs";
import { Host } from "../../../models/Host";

@TypeGraphQL.Resolver(_of => Host)
export class FindFirstHostResolver {
  @TypeGraphQL.Query(_returns => Host, {
    nullable: true
  })
  async findFirstHost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstHostArgs): Promise<Host | null> {
    return ctx.prisma.host.findFirst(args);
  }
}
