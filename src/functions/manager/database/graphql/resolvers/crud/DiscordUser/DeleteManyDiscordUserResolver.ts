import * as TypeGraphQL from "type-graphql";
import { DeleteManyDiscordUserArgs } from "./args/DeleteManyDiscordUserArgs";
import { DiscordUser } from "../../../models/DiscordUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class DeleteManyDiscordUserResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDiscordUserArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.discordUser.deleteMany(args);
  }
}
