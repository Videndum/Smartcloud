import * as TypeGraphQL from "type-graphql";
import { UpsertTwitchAuthArgs } from "./args/UpsertTwitchAuthArgs";
import { TwitchAuth } from "../../../models/TwitchAuth";

@TypeGraphQL.Resolver(_of => TwitchAuth)
export class UpsertTwitchAuthResolver {
  @TypeGraphQL.Mutation(_returns => TwitchAuth, {
    nullable: false
  })
  async upsertTwitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTwitchAuthArgs): Promise<TwitchAuth> {
    return ctx.prisma.twitchAuth.upsert(args);
  }
}
