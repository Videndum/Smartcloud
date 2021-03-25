import * as TypeGraphQL from "type-graphql";
import { CreateShardArgs } from "./args/CreateShardArgs";
import { Shard } from "../../../models/Shard";

@TypeGraphQL.Resolver(_of => Shard)
export class CreateShardResolver {
  @TypeGraphQL.Mutation(_returns => Shard, {
    nullable: false
  })
  async createShard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateShardArgs): Promise<Shard> {
    return ctx.prisma.shard.create(args);
  }
}
