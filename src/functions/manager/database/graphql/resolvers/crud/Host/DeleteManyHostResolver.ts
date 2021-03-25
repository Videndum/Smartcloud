import * as TypeGraphQL from "type-graphql";
import { DeleteManyHostArgs } from "./args/DeleteManyHostArgs";
import { Host } from "../../../models/Host";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Host)
export class DeleteManyHostResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyHost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyHostArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.host.deleteMany(args);
  }
}
