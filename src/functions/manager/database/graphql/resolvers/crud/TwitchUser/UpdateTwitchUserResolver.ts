import * as TypeGraphQL from "type-graphql";
import { UpdateTwitchUserArgs } from "./args/UpdateTwitchUserArgs";
import { TwitchUser } from "../../../models/TwitchUser";

@TypeGraphQL.Resolver(_of => TwitchUser)
export class UpdateTwitchUserResolver {
  @TypeGraphQL.Mutation(_returns => TwitchUser, {
    nullable: true
  })
  async updateTwitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTwitchUserArgs): Promise<TwitchUser | null> {
    return ctx.prisma.twitchUser.update(args);
  }
}
