import * as TypeGraphQL from "type-graphql";
import { CreateTwitchUserArgs } from "./args/CreateTwitchUserArgs";
import { TwitchUser } from "../../../models/TwitchUser";

@TypeGraphQL.Resolver(_of => TwitchUser)
export class CreateTwitchUserResolver {
  @TypeGraphQL.Mutation(_returns => TwitchUser, {
    nullable: false
  })
  async createTwitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTwitchUserArgs): Promise<TwitchUser> {
    return ctx.prisma.twitchUser.create(args);
  }
}
