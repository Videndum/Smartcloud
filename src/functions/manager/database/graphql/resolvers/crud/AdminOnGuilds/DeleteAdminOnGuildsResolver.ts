import * as TypeGraphQL from "type-graphql";
import { DeleteAdminOnGuildsArgs } from "./args/DeleteAdminOnGuildsArgs";
import { AdminOnGuilds } from "../../../models/AdminOnGuilds";

@TypeGraphQL.Resolver(_of => AdminOnGuilds)
export class DeleteAdminOnGuildsResolver {
  @TypeGraphQL.Mutation(_returns => AdminOnGuilds, {
    nullable: true
  })
  async deleteAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteAdminOnGuildsArgs): Promise<AdminOnGuilds | null> {
    return ctx.prisma.adminOnGuilds.delete(args);
  }
}
