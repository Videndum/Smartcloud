import * as TypeGraphQL from "type-graphql";
import { FindUniqueGuildArgs } from "./args/FindUniqueGuildArgs";
import { Guild } from "../../../models/Guild";

@TypeGraphQL.Resolver(_of => Guild)
export class FindUniqueGuildResolver {
  @TypeGraphQL.Query(_returns => Guild, {
    nullable: true
  })
  async guild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueGuildArgs): Promise<Guild | null> {
    return ctx.prisma.guild.findUnique(args);
  }
}
