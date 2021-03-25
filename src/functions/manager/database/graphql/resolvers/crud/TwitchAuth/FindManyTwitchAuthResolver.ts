import * as TypeGraphQL from "type-graphql";
import { FindManyTwitchAuthArgs } from "./args/FindManyTwitchAuthArgs";
import { TwitchAuth } from "../../../models/TwitchAuth";

@TypeGraphQL.Resolver(_of => TwitchAuth)
export class FindManyTwitchAuthResolver {
  @TypeGraphQL.Query(_returns => [TwitchAuth], {
    nullable: false
  })
  async twitchAuths(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTwitchAuthArgs): Promise<TwitchAuth[]> {
    return ctx.prisma.twitchAuth.findMany(args);
  }
}
