import * as TypeGraphQL from "type-graphql";
import { CreateTwitchAuthArgs } from "./args/CreateTwitchAuthArgs";
import { TwitchAuth } from "../../../models/TwitchAuth";

@TypeGraphQL.Resolver(_of => TwitchAuth)
export class CreateTwitchAuthResolver {
  @TypeGraphQL.Mutation(_returns => TwitchAuth, {
    nullable: false
  })
  async createTwitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTwitchAuthArgs): Promise<TwitchAuth> {
    return ctx.prisma.twitchAuth.create(args);
  }
}
