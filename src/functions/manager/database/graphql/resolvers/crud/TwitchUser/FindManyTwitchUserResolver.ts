import * as TypeGraphQL from "type-graphql";
import { FindManyTwitchUserArgs } from "./args/FindManyTwitchUserArgs";
import { TwitchUser } from "../../../models/TwitchUser";

@TypeGraphQL.Resolver(_of => TwitchUser)
export class FindManyTwitchUserResolver {
  @TypeGraphQL.Query(_returns => [TwitchUser], {
    nullable: false
  })
  async twitchUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTwitchUserArgs): Promise<TwitchUser[]> {
    return ctx.prisma.twitchUser.findMany(args);
  }
}
