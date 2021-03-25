import * as TypeGraphQL from "type-graphql";
import { Action } from "../../../models/Action";
import { Bot } from "../../../models/Bot";
import { Command } from "../../../models/Command";
import { DiscordUser } from "../../../models/DiscordUser";
import { Host } from "../../../models/Host";
import { Manager } from "../../../models/Manager";
import { PAT } from "../../../models/PAT";
import { TwitchUser } from "../../../models/TwitchUser";
import { TwitterUser } from "../../../models/TwitterUser";
import { User } from "../../../models/User";
import { UserActionsArgs } from "./args/UserActionsArgs";
import { UserBotArgs } from "./args/UserBotArgs";
import { UserCommandsArgs } from "./args/UserCommandsArgs";
import { UserHostsArgs } from "./args/UserHostsArgs";
import { UserManagerArgs } from "./args/UserManagerArgs";
import { UserPatArgs } from "./args/UserPatArgs";
import { UserTwitterUserArgs } from "./args/UserTwitterUserArgs";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Action], {
    nullable: false
  })
  async actions(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserActionsArgs): Promise<Action[]> {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    }).actions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Bot], {
    nullable: false
  })
  async Bot(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserBotArgs): Promise<Bot[]> {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    }).Bot(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Command], {
    nullable: false
  })
  async commands(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCommandsArgs): Promise<Command[]> {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    }).commands(args);
  }

  @TypeGraphQL.FieldResolver(_type => DiscordUser, {
    nullable: true
  })
  async discord(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<DiscordUser | null> {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    }).discord({});
  }

  @TypeGraphQL.FieldResolver(_type => [Host], {
    nullable: false
  })
  async Hosts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserHostsArgs): Promise<Host[]> {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    }).Hosts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Manager], {
    nullable: false
  })
  async Manager(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserManagerArgs): Promise<Manager[]> {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    }).Manager(args);
  }

  @TypeGraphQL.FieldResolver(_type => [PAT], {
    nullable: false
  })
  async pat(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPatArgs): Promise<PAT[]> {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    }).pat(args);
  }

  @TypeGraphQL.FieldResolver(_type => TwitchUser, {
    nullable: true
  })
  async twitch(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<TwitchUser | null> {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    }).twitch({});
  }

  @TypeGraphQL.FieldResolver(_type => [TwitterUser], {
    nullable: false
  })
  async TwitterUser(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTwitterUserArgs): Promise<TwitterUser[]> {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    }).TwitterUser(args);
  }
}
