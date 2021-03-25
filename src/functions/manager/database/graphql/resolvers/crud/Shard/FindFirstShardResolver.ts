import * as TypeGraphQL from "type-graphql";
import { FindFirstShardArgs } from "./args/FindFirstShardArgs";
import { Shard } from "../../../models/Shard";

@TypeGraphQL.Resolver(_of => Shard)
export class FindFirstShardResolver {
  @TypeGraphQL.Query(_returns => Shard, {
    nullable: true
  })
  async findFirstShard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstShardArgs): Promise<Shard | null> {
    return ctx.prisma.shard.findFirst(args);
  }
}
