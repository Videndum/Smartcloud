import * as TypeGraphQL from "type-graphql";
import { Bot } from "../../../models/Bot";
import { Host } from "../../../models/Host";
import { Shard } from "../../../models/Shard";

@TypeGraphQL.Resolver(_of => Shard)
export class ShardRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Bot, {
    nullable: false
  })
  async bot(@TypeGraphQL.Root() shard: Shard, @TypeGraphQL.Ctx() ctx: any): Promise<Bot> {
    return ctx.prisma.shard.findUnique({
      where: {
        id: shard.id,
      },
    }).bot({});
  }

  @TypeGraphQL.FieldResolver(_type => Host, {
    nullable: false
  })
  async Host(@TypeGraphQL.Root() shard: Shard, @TypeGraphQL.Ctx() ctx: any): Promise<Host> {
    return ctx.prisma.shard.findUnique({
      where: {
        id: shard.id,
      },
    }).Host({});
  }
}
