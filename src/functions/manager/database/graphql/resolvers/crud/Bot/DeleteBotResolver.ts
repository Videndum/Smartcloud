import * as TypeGraphQL from "type-graphql";
import { DeleteBotArgs } from "./args/DeleteBotArgs";
import { Bot } from "../../../models/Bot";

@TypeGraphQL.Resolver(_of => Bot)
export class DeleteBotResolver {
  @TypeGraphQL.Mutation(_returns => Bot, {
    nullable: true
  })
  async deleteBot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteBotArgs): Promise<Bot | null> {
    return ctx.prisma.bot.delete(args);
  }
}
