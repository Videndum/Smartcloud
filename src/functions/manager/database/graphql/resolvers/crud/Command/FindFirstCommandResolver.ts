import * as TypeGraphQL from "type-graphql";
import { FindFirstCommandArgs } from "./args/FindFirstCommandArgs";
import { Command } from "../../../models/Command";

@TypeGraphQL.Resolver(_of => Command)
export class FindFirstCommandResolver {
  @TypeGraphQL.Query(_returns => Command, {
    nullable: true
  })
  async findFirstCommand(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCommandArgs): Promise<Command | null> {
    return ctx.prisma.command.findFirst(args);
  }
}
