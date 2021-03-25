import * as TypeGraphQL from "type-graphql";
import { DeleteGuildArgs } from "./args/DeleteGuildArgs";
import { Guild } from "../../../models/Guild";

@TypeGraphQL.Resolver(_of => Guild)
export class DeleteGuildResolver {
  @TypeGraphQL.Mutation(_returns => Guild, {
    nullable: true
  })
  async deleteGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteGuildArgs): Promise<Guild | null> {
    return ctx.prisma.guild.delete(args);
  }
}
