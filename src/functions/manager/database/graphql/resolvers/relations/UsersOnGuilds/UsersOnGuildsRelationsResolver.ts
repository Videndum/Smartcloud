import * as TypeGraphQL from "type-graphql";
import { DiscordUser } from "../../../models/DiscordUser";
import { Guild } from "../../../models/Guild";
import { UsersOnGuilds } from "../../../models/UsersOnGuilds";

@TypeGraphQL.Resolver(_of => UsersOnGuilds)
export class UsersOnGuildsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Guild, {
    nullable: false
  })
  async guild(@TypeGraphQL.Root() usersOnGuilds: UsersOnGuilds, @TypeGraphQL.Ctx() ctx: any): Promise<Guild> {
    return ctx.prisma.usersOnGuilds.findUnique({
      where: {
        userId_guildId: {
          userId: usersOnGuilds.userId,
          guildId: usersOnGuilds.guildId,
        },
      },
    }).guild({});
  }

  @TypeGraphQL.FieldResolver(_type => DiscordUser, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() usersOnGuilds: UsersOnGuilds, @TypeGraphQL.Ctx() ctx: any): Promise<DiscordUser> {
    return ctx.prisma.usersOnGuilds.findUnique({
      where: {
        userId_guildId: {
          userId: usersOnGuilds.userId,
          guildId: usersOnGuilds.guildId,
        },
      },
    }).user({});
  }
}
