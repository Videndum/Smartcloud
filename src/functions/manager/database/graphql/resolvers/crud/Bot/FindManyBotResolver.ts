import * as TypeGraphQL from "type-graphql";
import { FindManyBotArgs } from "./args/FindManyBotArgs";
import { Bot } from "../../../models/Bot";

@TypeGraphQL.Resolver(_of => Bot)
export class FindManyBotResolver {
  @TypeGraphQL.Query(_returns => [Bot], {
    nullable: false
  })
  async bots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyBotArgs): Promise<Bot[]> {
    return ctx.prisma.bot.findMany(args);
  }
}
