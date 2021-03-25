import * as TypeGraphQL from "type-graphql";
import { UpdateShardArgs } from "./args/UpdateShardArgs";
import { Shard } from "../../../models/Shard";

@TypeGraphQL.Resolver(_of => Shard)
export class UpdateShardResolver {
  @TypeGraphQL.Mutation(_returns => Shard, {
    nullable: true
  })
  async updateShard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateShardArgs): Promise<Shard | null> {
    return ctx.prisma.shard.update(args);
  }
}
