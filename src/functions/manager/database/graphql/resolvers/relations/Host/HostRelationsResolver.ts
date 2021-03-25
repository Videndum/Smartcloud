import * as TypeGraphQL from "type-graphql";
import { Bot } from "../../../models/Bot";
import { Host } from "../../../models/Host";
import { Shard } from "../../../models/Shard";
import { User } from "../../../models/User";
import { HostBotsArgs } from "./args/HostBotsArgs";
import { HostPriorityBotArgs } from "./args/HostPriorityBotArgs";
import { HostShardsArgs } from "./args/HostShardsArgs";

@TypeGraphQL.Resolver(_of => Host)
export class HostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() host: Host, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.host.findUnique({
      where: {
        id: host.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => [Bot], {
    nullable: false
  })
  async bots(@TypeGraphQL.Root() host: Host, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: HostBotsArgs): Promise<Bot[]> {
    return ctx.prisma.host.findUnique({
      where: {
        id: host.id,
      },
    }).bots(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Bot], {
    nullable: false
  })
  async priorityBot(@TypeGraphQL.Root() host: Host, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: HostPriorityBotArgs): Promise<Bot[]> {
    return ctx.prisma.host.findUnique({
      where: {
        id: host.id,
      },
    }).priorityBot(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Shard], {
    nullable: false
  })
  async shards(@TypeGraphQL.Root() host: Host, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: HostShardsArgs): Promise<Shard[]> {
    return ctx.prisma.host.findUnique({
      where: {
        id: host.id,
      },
    }).shards(args);
  }
}
