import * as TypeGraphQL from "type-graphql";
import { AdminOnGuilds } from "../../../models/AdminOnGuilds";
import { Guild } from "../../../models/Guild";
import { UsersOnGuilds } from "../../../models/UsersOnGuilds";
import { GuildAdminsArgs } from "./args/GuildAdminsArgs";
import { GuildMembersArgs } from "./args/GuildMembersArgs";

@TypeGraphQL.Resolver(_of => Guild)
export class GuildRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [AdminOnGuilds], {
    nullable: false
  })
  async admins(@TypeGraphQL.Root() guild: Guild, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GuildAdminsArgs): Promise<AdminOnGuilds[]> {
    return ctx.prisma.guild.findUnique({
      where: {
        id: guild.id,
      },
    }).admins(args);
  }

  @TypeGraphQL.FieldResolver(_type => [UsersOnGuilds], {
    nullable: false
  })
  async members(@TypeGraphQL.Root() guild: Guild, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GuildMembersArgs): Promise<UsersOnGuilds[]> {
    return ctx.prisma.guild.findUnique({
      where: {
        id: guild.id,
      },
    }).members(args);
  }
}
