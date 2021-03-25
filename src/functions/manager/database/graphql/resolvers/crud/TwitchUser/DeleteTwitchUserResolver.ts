import * as TypeGraphQL from "type-graphql";
import { DeleteTwitchUserArgs } from "./args/DeleteTwitchUserArgs";
import { TwitchUser } from "../../../models/TwitchUser";

@TypeGraphQL.Resolver(_of => TwitchUser)
export class DeleteTwitchUserResolver {
  @TypeGraphQL.Mutation(_returns => TwitchUser, {
    nullable: true
  })
  async deleteTwitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTwitchUserArgs): Promise<TwitchUser | null> {
    return ctx.prisma.twitchUser.delete(args);
  }
}
