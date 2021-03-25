import * as TypeGraphQL from "type-graphql";
import { FindUniqueBotArgs } from "./args/FindUniqueBotArgs";
import { Bot } from "../../../models/Bot";

@TypeGraphQL.Resolver(_of => Bot)
export class FindUniqueBotResolver {
  @TypeGraphQL.Query(_returns => Bot, {
    nullable: true
  })
  async bot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueBotArgs): Promise<Bot | null> {
    return ctx.prisma.bot.findUnique(args);
  }
}
