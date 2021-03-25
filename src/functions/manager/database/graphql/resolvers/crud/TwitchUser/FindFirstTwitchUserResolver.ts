import * as TypeGraphQL from "type-graphql";
import { FindFirstTwitchUserArgs } from "./args/FindFirstTwitchUserArgs";
import { TwitchUser } from "../../../models/TwitchUser";

@TypeGraphQL.Resolver(_of => TwitchUser)
export class FindFirstTwitchUserResolver {
  @TypeGraphQL.Query(_returns => TwitchUser, {
    nullable: true
  })
  async findFirstTwitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTwitchUserArgs): Promise<TwitchUser | null> {
    return ctx.prisma.twitchUser.findFirst(args);
  }
}
