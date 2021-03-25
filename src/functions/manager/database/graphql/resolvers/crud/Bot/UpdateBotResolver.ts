import * as TypeGraphQL from "type-graphql";
import { UpdateBotArgs } from "./args/UpdateBotArgs";
import { Bot } from "../../../models/Bot";

@TypeGraphQL.Resolver(_of => Bot)
export class UpdateBotResolver {
  @TypeGraphQL.Mutation(_returns => Bot, {
    nullable: true
  })
  async updateBot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateBotArgs): Promise<Bot | null> {
    return ctx.prisma.bot.update(args);
  }
}
