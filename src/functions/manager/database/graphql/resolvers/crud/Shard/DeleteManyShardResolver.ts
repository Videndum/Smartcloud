import * as TypeGraphQL from "type-graphql";
import { DeleteManyShardArgs } from "./args/DeleteManyShardArgs";
import { Shard } from "../../../models/Shard";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Shard)
export class DeleteManyShardResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyShard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyShardArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.shard.deleteMany(args);
  }
}
