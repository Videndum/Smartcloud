import * as TypeGraphQL from "type-graphql";
import { DeleteHostArgs } from "./args/DeleteHostArgs";
import { Host } from "../../../models/Host";

@TypeGraphQL.Resolver(_of => Host)
export class DeleteHostResolver {
  @TypeGraphQL.Mutation(_returns => Host, {
    nullable: true
  })
  async deleteHost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteHostArgs): Promise<Host | null> {
    return ctx.prisma.host.delete(args);
  }
}
