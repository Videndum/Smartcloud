import * as TypeGraphQL from "type-graphql";
import { FindUniqueAdminOnGuildsArgs } from "./args/FindUniqueAdminOnGuildsArgs";
import { AdminOnGuilds } from "../../../models/AdminOnGuilds";

@TypeGraphQL.Resolver(_of => AdminOnGuilds)
export class FindUniqueAdminOnGuildsResolver {
  @TypeGraphQL.Query(_returns => AdminOnGuilds, {
    nullable: true
  })
  async findUniqueAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueAdminOnGuildsArgs): Promise<AdminOnGuilds | null> {
    return ctx.prisma.adminOnGuilds.findUnique(args);
  }
}
