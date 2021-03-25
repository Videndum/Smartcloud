import * as TypeGraphQL from "type-graphql";
import { UpdateTwitchAuthArgs } from "./args/UpdateTwitchAuthArgs";
import { TwitchAuth } from "../../../models/TwitchAuth";

@TypeGraphQL.Resolver(_of => TwitchAuth)
export class UpdateTwitchAuthResolver {
  @TypeGraphQL.Mutation(_returns => TwitchAuth, {
    nullable: true
  })
  async updateTwitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTwitchAuthArgs): Promise<TwitchAuth | null> {
    return ctx.prisma.twitchAuth.update(args);
  }
}
