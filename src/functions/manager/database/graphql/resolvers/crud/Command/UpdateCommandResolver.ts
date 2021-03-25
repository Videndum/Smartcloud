import * as TypeGraphQL from "type-graphql";
import { UpdateCommandArgs } from "./args/UpdateCommandArgs";
import { Command } from "../../../models/Command";

@TypeGraphQL.Resolver(_of => Command)
export class UpdateCommandResolver {
  @TypeGraphQL.Mutation(_returns => Command, {
    nullable: true
  })
  async updateCommand(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCommandArgs): Promise<Command | null> {
    return ctx.prisma.command.update(args);
  }
}
