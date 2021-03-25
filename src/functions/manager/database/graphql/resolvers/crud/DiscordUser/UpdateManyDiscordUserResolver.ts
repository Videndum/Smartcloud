import * as TypeGraphQL from "type-graphql";
import { UpdateManyDiscordUserArgs } from "./args/UpdateManyDiscordUserArgs";
import { DiscordUser } from "../../../models/DiscordUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class UpdateManyDiscordUserResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDiscordUserArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.discordUser.updateMany(args);
  }
}
