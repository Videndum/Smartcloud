import * as TypeGraphQL from "type-graphql";
import { FindManyCommandArgs } from "./args/FindManyCommandArgs";
import { Command } from "../../../models/Command";

@TypeGraphQL.Resolver(_of => Command)
export class FindManyCommandResolver {
  @TypeGraphQL.Query(_returns => [Command], {
    nullable: false
  })
  async commands(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCommandArgs): Promise<Command[]> {
    return ctx.prisma.command.findMany(args);
  }
}
