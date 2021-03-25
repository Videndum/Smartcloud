import * as TypeGraphQL from "type-graphql";
import { UpsertDiscordUserArgs } from "./args/UpsertDiscordUserArgs";
import { DiscordUser } from "../../../models/DiscordUser";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class UpsertDiscordUserResolver {
  @TypeGraphQL.Mutation(_returns => DiscordUser, {
    nullable: false
  })
  async upsertDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDiscordUserArgs): Promise<DiscordUser> {
    return ctx.prisma.discordUser.upsert(args);
  }
}
