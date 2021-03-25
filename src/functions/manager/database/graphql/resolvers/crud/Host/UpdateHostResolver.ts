import * as TypeGraphQL from "type-graphql";
import { UpdateHostArgs } from "./args/UpdateHostArgs";
import { Host } from "../../../models/Host";

@TypeGraphQL.Resolver(_of => Host)
export class UpdateHostResolver {
  @TypeGraphQL.Mutation(_returns => Host, {
    nullable: true
  })
  async updateHost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateHostArgs): Promise<Host | null> {
    return ctx.prisma.host.update(args);
  }
}
