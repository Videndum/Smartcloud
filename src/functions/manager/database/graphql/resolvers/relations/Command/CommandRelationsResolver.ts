import * as TypeGraphQL from "type-graphql";
import { Command } from "../../../models/Command";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => Command)
export class CommandRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() command: Command, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.command.findUnique({
      where: {
        id: command.id,
      },
    }).owner({});
  }
}
