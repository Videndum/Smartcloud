import * as TypeGraphQL from "type-graphql";
import { UpdateAdminOnGuildsArgs } from "./args/UpdateAdminOnGuildsArgs";
import { AdminOnGuilds } from "../../../models/AdminOnGuilds";

@TypeGraphQL.Resolver(_of => AdminOnGuilds)
export class UpdateAdminOnGuildsResolver {
  @TypeGraphQL.Mutation(_returns => AdminOnGuilds, {
    nullable: true
  })
  async updateAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateAdminOnGuildsArgs): Promise<AdminOnGuilds | null> {
    return ctx.prisma.adminOnGuilds.update(args);
  }
}
