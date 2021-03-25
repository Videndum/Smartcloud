import * as TypeGraphQL from "type-graphql";
import { FindManyAdminOnGuildsArgs } from "./args/FindManyAdminOnGuildsArgs";
import { AdminOnGuilds } from "../../../models/AdminOnGuilds";

@TypeGraphQL.Resolver(_of => AdminOnGuilds)
export class FindManyAdminOnGuildsResolver {
  @TypeGraphQL.Query(_returns => [AdminOnGuilds], {
    nullable: false
  })
  async findManyAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAdminOnGuildsArgs): Promise<AdminOnGuilds[]> {
    return ctx.prisma.adminOnGuilds.findMany(args);
  }
}
