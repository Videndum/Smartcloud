import * as TypeGraphQL from "type-graphql";
import { FindManyGuildArgs } from "./args/FindManyGuildArgs";
import { Guild } from "../../../models/Guild";

@TypeGraphQL.Resolver(_of => Guild)
export class FindManyGuildResolver {
  @TypeGraphQL.Query(_returns => [Guild], {
    nullable: false
  })
  async guilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyGuildArgs): Promise<Guild[]> {
    return ctx.prisma.guild.findMany(args);
  }
}
