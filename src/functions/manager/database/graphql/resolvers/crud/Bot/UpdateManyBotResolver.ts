import * as TypeGraphQL from "type-graphql";
import { UpdateManyBotArgs } from "./args/UpdateManyBotArgs";
import { Bot } from "../../../models/Bot";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Bot)
export class UpdateManyBotResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyBot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyBotArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.bot.updateMany(args);
  }
}
