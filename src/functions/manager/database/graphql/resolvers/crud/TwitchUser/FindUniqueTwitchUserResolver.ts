import * as TypeGraphQL from "type-graphql";
import { FindUniqueTwitchUserArgs } from "./args/FindUniqueTwitchUserArgs";
import { TwitchUser } from "../../../models/TwitchUser";

@TypeGraphQL.Resolver(_of => TwitchUser)
export class FindUniqueTwitchUserResolver {
  @TypeGraphQL.Query(_returns => TwitchUser, {
    nullable: true
  })
  async twitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTwitchUserArgs): Promise<TwitchUser | null> {
    return ctx.prisma.twitchUser.findUnique(args);
  }
}
