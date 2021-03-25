import * as TypeGraphQL from "type-graphql";
import { UpdateManyHostArgs } from "./args/UpdateManyHostArgs";
import { Host } from "../../../models/Host";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Host)
export class UpdateManyHostResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyHost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyHostArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.host.updateMany(args);
  }
}
