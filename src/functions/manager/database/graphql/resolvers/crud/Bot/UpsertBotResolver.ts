import * as TypeGraphQL from "type-graphql";
import { UpsertBotArgs } from "./args/UpsertBotArgs";
import { Bot } from "../../../models/Bot";

@TypeGraphQL.Resolver(_of => Bot)
export class UpsertBotResolver {
  @TypeGraphQL.Mutation(_returns => Bot, {
    nullable: false
  })
  async upsertBot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertBotArgs): Promise<Bot> {
    return ctx.prisma.bot.upsert(args);
  }
}
