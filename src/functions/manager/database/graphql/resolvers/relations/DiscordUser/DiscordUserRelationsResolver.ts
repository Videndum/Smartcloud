import * as TypeGraphQL from "type-graphql";
import { AdminOnGuilds } from "../../../models/AdminOnGuilds";
import { DiscordUser } from "../../../models/DiscordUser";
import { User } from "../../../models/User";
import { UsersOnGuilds } from "../../../models/UsersOnGuilds";
import { DiscordUserAdministatesArgs } from "./args/DiscordUserAdministatesArgs";
import { DiscordUserUsersOnGuildsArgs } from "./args/DiscordUserUsersOnGuildsArgs";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class DiscordUserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() discordUser: DiscordUser, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return ctx.prisma.discordUser.findUnique({
      where: {
        id: discordUser.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [AdminOnGuilds], {
    nullable: false
  })
  async administates(@TypeGraphQL.Root() discordUser: DiscordUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DiscordUserAdministatesArgs): Promise<AdminOnGuilds[]> {
    return ctx.prisma.discordUser.findUnique({
      where: {
        id: discordUser.id,
      },
    }).administates(args);
  }

  @TypeGraphQL.FieldResolver(_type => [UsersOnGuilds], {
    nullable: false
  })
  async UsersOnGuilds(@TypeGraphQL.Root() discordUser: DiscordUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DiscordUserUsersOnGuildsArgs): Promise<UsersOnGuilds[]> {
    return ctx.prisma.discordUser.findUnique({
      where: {
        id: discordUser.id,
      },
    }).UsersOnGuilds(args);
  }
}
