import * as TypeGraphQL from "type-graphql";
import { FindManyDiscordUserArgs } from "./args/FindManyDiscordUserArgs";
import { DiscordUser } from "../../../models/DiscordUser";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class FindManyDiscordUserResolver {
  @TypeGraphQL.Query(_returns => [DiscordUser], {
    nullable: false
  })
  async discordUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDiscordUserArgs): Promise<DiscordUser[]> {
    return ctx.prisma.discordUser.findMany(args);
  }
}
