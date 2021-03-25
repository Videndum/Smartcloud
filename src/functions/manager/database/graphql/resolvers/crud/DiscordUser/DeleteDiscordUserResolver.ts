import * as TypeGraphQL from "type-graphql";
import { DeleteDiscordUserArgs } from "./args/DeleteDiscordUserArgs";
import { DiscordUser } from "../../../models/DiscordUser";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class DeleteDiscordUserResolver {
  @TypeGraphQL.Mutation(_returns => DiscordUser, {
    nullable: true
  })
  async deleteDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteDiscordUserArgs): Promise<DiscordUser | null> {
    return ctx.prisma.discordUser.delete(args);
  }
}
