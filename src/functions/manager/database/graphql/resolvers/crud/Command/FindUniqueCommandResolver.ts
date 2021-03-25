import * as TypeGraphQL from "type-graphql";
import { FindUniqueCommandArgs } from "./args/FindUniqueCommandArgs";
import { Command } from "../../../models/Command";

@TypeGraphQL.Resolver(_of => Command)
export class FindUniqueCommandResolver {
  @TypeGraphQL.Query(_returns => Command, {
    nullable: true
  })
  async command(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCommandArgs): Promise<Command | null> {
    return ctx.prisma.command.findUnique(args);
  }
}
