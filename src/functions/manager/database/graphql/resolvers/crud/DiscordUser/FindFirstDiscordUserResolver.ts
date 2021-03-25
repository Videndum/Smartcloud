import * as TypeGraphQL from "type-graphql";
import { FindFirstDiscordUserArgs } from "./args/FindFirstDiscordUserArgs";
import { DiscordUser } from "../../../models/DiscordUser";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class FindFirstDiscordUserResolver {
  @TypeGraphQL.Query(_returns => DiscordUser, {
    nullable: true
  })
  async findFirstDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstDiscordUserArgs): Promise<DiscordUser | null> {
    return ctx.prisma.discordUser.findFirst(args);
  }
}
