import * as TypeGraphQL from "type-graphql";
import { FindFirstTwitchAuthArgs } from "./args/FindFirstTwitchAuthArgs";
import { TwitchAuth } from "../../../models/TwitchAuth";

@TypeGraphQL.Resolver(_of => TwitchAuth)
export class FindFirstTwitchAuthResolver {
  @TypeGraphQL.Query(_returns => TwitchAuth, {
    nullable: true
  })
  async findFirstTwitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTwitchAuthArgs): Promise<TwitchAuth | null> {
    return ctx.prisma.twitchAuth.findFirst(args);
  }
}
