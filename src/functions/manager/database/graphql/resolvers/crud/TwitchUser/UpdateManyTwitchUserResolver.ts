import * as TypeGraphQL from "type-graphql";
import { UpdateManyTwitchUserArgs } from "./args/UpdateManyTwitchUserArgs";
import { TwitchUser } from "../../../models/TwitchUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => TwitchUser)
export class UpdateManyTwitchUserResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTwitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTwitchUserArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.twitchUser.updateMany(args);
  }
}
