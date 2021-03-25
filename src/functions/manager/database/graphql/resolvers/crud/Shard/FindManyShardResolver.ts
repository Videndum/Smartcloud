import * as TypeGraphQL from "type-graphql";
import { FindManyShardArgs } from "./args/FindManyShardArgs";
import { Shard } from "../../../models/Shard";

@TypeGraphQL.Resolver(_of => Shard)
export class FindManyShardResolver {
  @TypeGraphQL.Query(_returns => [Shard], {
    nullable: false
  })
  async shards(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyShardArgs): Promise<Shard[]> {
    return ctx.prisma.shard.findMany(args);
  }
}
