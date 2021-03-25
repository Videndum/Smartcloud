import * as TypeGraphQL from "type-graphql";
import { UpsertTwitchUserArgs } from "./args/UpsertTwitchUserArgs";
import { TwitchUser } from "../../../models/TwitchUser";

@TypeGraphQL.Resolver(_of => TwitchUser)
export class UpsertTwitchUserResolver {
  @TypeGraphQL.Mutation(_returns => TwitchUser, {
    nullable: false
  })
  async upsertTwitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTwitchUserArgs): Promise<TwitchUser> {
    return ctx.prisma.twitchUser.upsert(args);
  }
}
