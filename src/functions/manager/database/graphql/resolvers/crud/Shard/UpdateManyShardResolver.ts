import * as TypeGraphQL from "type-graphql";
import { UpdateManyShardArgs } from "./args/UpdateManyShardArgs";
import { Shard } from "../../../models/Shard";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Shard)
export class UpdateManyShardResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyShard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyShardArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.shard.updateMany(args);
  }
}
