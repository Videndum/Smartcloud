import * as TypeGraphQL from "type-graphql";
import { UpdateGuildArgs } from "./args/UpdateGuildArgs";
import { Guild } from "../../../models/Guild";

@TypeGraphQL.Resolver(_of => Guild)
export class UpdateGuildResolver {
  @TypeGraphQL.Mutation(_returns => Guild, {
    nullable: true
  })
  async updateGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateGuildArgs): Promise<Guild | null> {
    return ctx.prisma.guild.update(args);
  }
}
