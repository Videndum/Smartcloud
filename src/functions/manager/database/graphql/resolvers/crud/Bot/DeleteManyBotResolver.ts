import * as TypeGraphQL from "type-graphql";
import { DeleteManyBotArgs } from "./args/DeleteManyBotArgs";
import { Bot } from "../../../models/Bot";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Bot)
export class DeleteManyBotResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyBot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyBotArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.bot.deleteMany(args);
  }
}
