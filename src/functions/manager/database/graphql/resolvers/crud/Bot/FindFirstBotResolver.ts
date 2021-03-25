import * as TypeGraphQL from "type-graphql";
import { FindFirstBotArgs } from "./args/FindFirstBotArgs";
import { Bot } from "../../../models/Bot";

@TypeGraphQL.Resolver(_of => Bot)
export class FindFirstBotResolver {
  @TypeGraphQL.Query(_returns => Bot, {
    nullable: true
  })
  async findFirstBot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstBotArgs): Promise<Bot | null> {
    return ctx.prisma.bot.findFirst(args);
  }
}
