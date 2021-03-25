import * as TypeGraphQL from "type-graphql";
import { UpdateDiscordUserArgs } from "./args/UpdateDiscordUserArgs";
import { DiscordUser } from "../../../models/DiscordUser";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class UpdateDiscordUserResolver {
  @TypeGraphQL.Mutation(_returns => DiscordUser, {
    nullable: true
  })
  async updateDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateDiscordUserArgs): Promise<DiscordUser | null> {
    return ctx.prisma.discordUser.update(args);
  }
}
