import * as TypeGraphQL from "type-graphql";
import { FindFirstAdminOnGuildsArgs } from "./args/FindFirstAdminOnGuildsArgs";
import { AdminOnGuilds } from "../../../models/AdminOnGuilds";

@TypeGraphQL.Resolver(_of => AdminOnGuilds)
export class FindFirstAdminOnGuildsResolver {
  @TypeGraphQL.Query(_returns => AdminOnGuilds, {
    nullable: true
  })
  async findFirstAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstAdminOnGuildsArgs): Promise<AdminOnGuilds | null> {
    return ctx.prisma.adminOnGuilds.findFirst(args);
  }
}
