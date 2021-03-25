import * as TypeGraphQL from "type-graphql";
import { DeleteManyTwitchUserArgs } from "./args/DeleteManyTwitchUserArgs";
import { TwitchUser } from "../../../models/TwitchUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => TwitchUser)
export class DeleteManyTwitchUserResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTwitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTwitchUserArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.twitchUser.deleteMany(args);
  }
}
