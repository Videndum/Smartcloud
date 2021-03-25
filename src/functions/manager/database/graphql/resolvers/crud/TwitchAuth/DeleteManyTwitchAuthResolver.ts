import * as TypeGraphQL from "type-graphql";
import { DeleteManyTwitchAuthArgs } from "./args/DeleteManyTwitchAuthArgs";
import { TwitchAuth } from "../../../models/TwitchAuth";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => TwitchAuth)
export class DeleteManyTwitchAuthResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTwitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTwitchAuthArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.twitchAuth.deleteMany(args);
  }
}
