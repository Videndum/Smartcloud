import * as TypeGraphQL from "type-graphql";
import { Bot } from "../../../models/Bot";
import { Host } from "../../../models/Host";
import { Shard } from "../../../models/Shard";
import { TwitchAuth } from "../../../models/TwitchAuth";
import { User } from "../../../models/User";
import { BotShardsArgs } from "./args/BotShardsArgs";

@TypeGraphQL.Resolver(_of => Bot)
export class BotRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Host, {
    nullable: false
  })
  async hosts(@TypeGraphQL.Root() bot: Bot, @TypeGraphQL.Ctx() ctx: any): Promise<Host> {
    return ctx.prisma.bot.findUnique({
      where: {
        id: bot.id,
      },
    }).hosts({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() bot: Bot, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.bot.findUnique({
      where: {
        id: bot.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => Host, {
    nullable: true
  })
  async priorityHost(@TypeGraphQL.Root() bot: Bot, @TypeGraphQL.Ctx() ctx: any): Promise<Host | null> {
    return ctx.prisma.bot.findUnique({
      where: {
        id: bot.id,
      },
    }).priorityHost({});
  }

  @TypeGraphQL.FieldResolver(_type => TwitchAuth, {
    nullable: false
  })
  async twitchAuth(@TypeGraphQL.Root() bot: Bot, @TypeGraphQL.Ctx() ctx: any): Promise<TwitchAuth> {
    return ctx.prisma.bot.findUnique({
      where: {
        id: bot.id,
      },
    }).twitchAuth({});
  }

  @TypeGraphQL.FieldResolver(_type => [Shard], {
    nullable: false
  })
  async shards(@TypeGraphQL.Root() bot: Bot, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BotShardsArgs): Promise<Shard[]> {
    return ctx.prisma.bot.findUnique({
      where: {
        id: bot.id,
      },
    }).shards(args);
  }
}
