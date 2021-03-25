import * as TypeGraphQL from "type-graphql";
import { FindFirstGuildArgs } from "./args/FindFirstGuildArgs";
import { Guild } from "../../../models/Guild";

@TypeGraphQL.Resolver(_of => Guild)
export class FindFirstGuildResolver {
  @TypeGraphQL.Query(_returns => Guild, {
    nullable: true
  })
  async findFirstGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstGuildArgs): Promise<Guild | null> {
    return ctx.prisma.guild.findFirst(args);
  }
}
