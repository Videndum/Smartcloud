import * as TypeGraphQL from "type-graphql";
import { FindUniqueShardArgs } from "./args/FindUniqueShardArgs";
import { Shard } from "../../../models/Shard";

@TypeGraphQL.Resolver(_of => Shard)
export class FindUniqueShardResolver {
  @TypeGraphQL.Query(_returns => Shard, {
    nullable: true
  })
  async shard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueShardArgs): Promise<Shard | null> {
    return ctx.prisma.shard.findUnique(args);
  }
}
