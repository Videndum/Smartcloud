import * as TypeGraphQL from "type-graphql";
import { FindUniqueDiscordUserArgs } from "./args/FindUniqueDiscordUserArgs";
import { DiscordUser } from "../../../models/DiscordUser";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class FindUniqueDiscordUserResolver {
  @TypeGraphQL.Query(_returns => DiscordUser, {
    nullable: true
  })
  async discordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDiscordUserArgs): Promise<DiscordUser | null> {
    return ctx.prisma.discordUser.findUnique(args);
  }
}
