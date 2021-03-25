import * as TypeGraphQL from "type-graphql";
import { DeleteCommandArgs } from "./args/DeleteCommandArgs";
import { Command } from "../../../models/Command";

@TypeGraphQL.Resolver(_of => Command)
export class DeleteCommandResolver {
  @TypeGraphQL.Mutation(_returns => Command, {
    nullable: true
  })
  async deleteCommand(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCommandArgs): Promise<Command | null> {
    return ctx.prisma.command.delete(args);
  }
}
