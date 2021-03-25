import * as TypeGraphQL from "type-graphql";
import { FindUniqueHostArgs } from "./args/FindUniqueHostArgs";
import { Host } from "../../../models/Host";

@TypeGraphQL.Resolver(_of => Host)
export class FindUniqueHostResolver {
  @TypeGraphQL.Query(_returns => Host, {
    nullable: true
  })
  async host(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueHostArgs): Promise<Host | null> {
    return ctx.prisma.host.findUnique(args);
  }
}
