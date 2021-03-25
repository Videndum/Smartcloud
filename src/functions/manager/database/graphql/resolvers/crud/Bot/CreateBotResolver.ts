import * as TypeGraphQL from "type-graphql";
import { CreateBotArgs } from "./args/CreateBotArgs";
import { Bot } from "../../../models/Bot";

@TypeGraphQL.Resolver(_of => Bot)
export class CreateBotResolver {
  @TypeGraphQL.Mutation(_returns => Bot, {
    nullable: false
  })
  async createBot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateBotArgs): Promise<Bot> {
    return ctx.prisma.bot.create(args);
  }
}
