import * as TypeGraphQL from "type-graphql";
import { DeleteShardArgs } from "./args/DeleteShardArgs";
import { Shard } from "../../../models/Shard";

@TypeGraphQL.Resolver(_of => Shard)
export class DeleteShardResolver {
  @TypeGraphQL.Mutation(_returns => Shard, {
    nullable: true
  })
  async deleteShard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteShardArgs): Promise<Shard | null> {
    return ctx.prisma.shard.delete(args);
  }
}
