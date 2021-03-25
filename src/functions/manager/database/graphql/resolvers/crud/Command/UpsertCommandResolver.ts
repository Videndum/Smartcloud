import * as TypeGraphQL from "type-graphql";
import { UpsertCommandArgs } from "./args/UpsertCommandArgs";
import { Command } from "../../../models/Command";

@TypeGraphQL.Resolver(_of => Command)
export class UpsertCommandResolver {
  @TypeGraphQL.Mutation(_returns => Command, {
    nullable: false
  })
  async upsertCommand(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCommandArgs): Promise<Command> {
    return ctx.prisma.command.upsert(args);
  }
}
