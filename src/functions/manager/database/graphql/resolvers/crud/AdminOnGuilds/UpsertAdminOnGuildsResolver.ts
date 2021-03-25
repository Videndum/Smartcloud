import * as TypeGraphQL from "type-graphql";
import { UpsertAdminOnGuildsArgs } from "./args/UpsertAdminOnGuildsArgs";
import { AdminOnGuilds } from "../../../models/AdminOnGuilds";

@TypeGraphQL.Resolver(_of => AdminOnGuilds)
export class UpsertAdminOnGuildsResolver {
  @TypeGraphQL.Mutation(_returns => AdminOnGuilds, {
    nullable: false
  })
  async upsertAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertAdminOnGuildsArgs): Promise<AdminOnGuilds> {
    return ctx.prisma.adminOnGuilds.upsert(args);
  }
}
