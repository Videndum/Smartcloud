import * as TypeGraphQL from "type-graphql";
import { DeleteTwitchAuthArgs } from "./args/DeleteTwitchAuthArgs";
import { TwitchAuth } from "../../../models/TwitchAuth";

@TypeGraphQL.Resolver(_of => TwitchAuth)
export class DeleteTwitchAuthResolver {
  @TypeGraphQL.Mutation(_returns => TwitchAuth, {
    nullable: true
  })
  async deleteTwitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTwitchAuthArgs): Promise<TwitchAuth | null> {
    return ctx.prisma.twitchAuth.delete(args);
  }
}
