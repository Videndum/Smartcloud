import * as TypeGraphQL from "type-graphql";
import { CreateDiscordUserArgs } from "./args/CreateDiscordUserArgs";
import { DiscordUser } from "../../../models/DiscordUser";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class CreateDiscordUserResolver {
  @TypeGraphQL.Mutation(_returns => DiscordUser, {
    nullable: false
  })
  async createDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateDiscordUserArgs): Promise<DiscordUser> {
    return ctx.prisma.discordUser.create(args);
  }
}
