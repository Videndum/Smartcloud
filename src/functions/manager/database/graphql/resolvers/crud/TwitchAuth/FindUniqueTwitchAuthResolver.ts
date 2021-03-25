import * as TypeGraphQL from "type-graphql";
import { FindUniqueTwitchAuthArgs } from "./args/FindUniqueTwitchAuthArgs";
import { TwitchAuth } from "../../../models/TwitchAuth";

@TypeGraphQL.Resolver(_of => TwitchAuth)
export class FindUniqueTwitchAuthResolver {
  @TypeGraphQL.Query(_returns => TwitchAuth, {
    nullable: true
  })
  async twitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTwitchAuthArgs): Promise<TwitchAuth | null> {
    return ctx.prisma.twitchAuth.findUnique(args);
  }
}
