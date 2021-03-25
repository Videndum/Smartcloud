import * as TypeGraphQL from "type-graphql";
import { FindManyHostArgs } from "./args/FindManyHostArgs";
import { Host } from "../../../models/Host";

@TypeGraphQL.Resolver(_of => Host)
export class FindManyHostResolver {
  @TypeGraphQL.Query(_returns => [Host], {
    nullable: false
  })
  async hosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyHostArgs): Promise<Host[]> {
    return ctx.prisma.host.findMany(args);
  }
}
