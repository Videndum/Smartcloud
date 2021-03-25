import * as TypeGraphQL from "type-graphql";
import { AdminOnGuilds } from "../../../models/AdminOnGuilds";
import { DiscordUser } from "../../../models/DiscordUser";
import { Guild } from "../../../models/Guild";

@TypeGraphQL.Resolver(_of => AdminOnGuilds)
export class AdminOnGuildsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Guild, {
    nullable: false
  })
  async guild(@TypeGraphQL.Root() adminOnGuilds: AdminOnGuilds, @TypeGraphQL.Ctx() ctx: any): Promise<Guild> {
    return ctx.prisma.adminOnGuilds.findUnique({
      where: {
        userId_guildId: {
          userId: adminOnGuilds.userId,
          guildId: adminOnGuilds.guildId,
        },
      },
    }).guild({});
  }

  @TypeGraphQL.FieldResolver(_type => DiscordUser, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() adminOnGuilds: AdminOnGuilds, @TypeGraphQL.Ctx() ctx: any): Promise<DiscordUser> {
    return ctx.prisma.adminOnGuilds.findUnique({
      where: {
        userId_guildId: {
          userId: adminOnGuilds.userId,
          guildId: adminOnGuilds.guildId,
        },
      },
    }).user({});
  }
}
