import * as TypeGraphQL from "type-graphql";
import { CreateCommandArgs } from "./args/CreateCommandArgs";
import { Command } from "../../../models/Command";

@TypeGraphQL.Resolver(_of => Command)
export class CreateCommandResolver {
  @TypeGraphQL.Mutation(_returns => Command, {
    nullable: false
  })
  async createCommand(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCommandArgs): Promise<Command> {
    return ctx.prisma.command.create(args);
  }
}
