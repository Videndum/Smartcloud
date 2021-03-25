import * as TypeGraphQL from "type-graphql";
import { UpsertShardArgs } from "./args/UpsertShardArgs";
import { Shard } from "../../../models/Shard";

@TypeGraphQL.Resolver(_of => Shard)
export class UpsertShardResolver {
  @TypeGraphQL.Mutation(_returns => Shard, {
    nullable: false
  })
  async upsertShard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertShardArgs): Promise<Shard> {
    return ctx.prisma.shard.upsert(args);
  }
}
