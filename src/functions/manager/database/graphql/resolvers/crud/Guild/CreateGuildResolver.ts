import * as TypeGraphQL from "type-graphql";
import { CreateGuildArgs } from "./args/CreateGuildArgs";
import { Guild } from "../../../models/Guild";

@TypeGraphQL.Resolver(_of => Guild)
export class CreateGuildResolver {
  @TypeGraphQL.Mutation(_returns => Guild, {
    nullable: false
  })
  async createGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateGuildArgs): Promise<Guild> {
    return ctx.prisma.guild.create(args);
  }
}
