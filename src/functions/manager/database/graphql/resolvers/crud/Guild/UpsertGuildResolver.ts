import * as TypeGraphQL from "type-graphql";
import { UpsertGuildArgs } from "./args/UpsertGuildArgs";
import { Guild } from "../../../models/Guild";

@TypeGraphQL.Resolver(_of => Guild)
export class UpsertGuildResolver {
  @TypeGraphQL.Mutation(_returns => Guild, {
    nullable: false
  })
  async upsertGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertGuildArgs): Promise<Guild> {
    return ctx.prisma.guild.upsert(args);
  }
}
