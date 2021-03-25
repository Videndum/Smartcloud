import * as TypeGraphQL from "type-graphql";
import { FindFirstUsersOnGuildsArgs } from "./args/FindFirstUsersOnGuildsArgs";
import { UsersOnGuilds } from "../../../models/UsersOnGuilds";

@TypeGraphQL.Resolver(_of => UsersOnGuilds)
export class FindFirstUsersOnGuildsResolver {
  @TypeGraphQL.Query(_returns => UsersOnGuilds, {
    nullable: true
  })
  async findFirstUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstUsersOnGuildsArgs): Promise<UsersOnGuilds | null> {
    return ctx.prisma.usersOnGuilds.findFirst(args);
  }
}
