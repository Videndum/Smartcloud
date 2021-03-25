import * as TypeGraphQL from "type-graphql";
import { FindUniqueUsersOnGuildsArgs } from "./args/FindUniqueUsersOnGuildsArgs";
import { UsersOnGuilds } from "../../../models/UsersOnGuilds";

@TypeGraphQL.Resolver(_of => UsersOnGuilds)
export class FindUniqueUsersOnGuildsResolver {
  @TypeGraphQL.Query(_returns => UsersOnGuilds, {
    nullable: true
  })
  async findUniqueUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueUsersOnGuildsArgs): Promise<UsersOnGuilds | null> {
    return ctx.prisma.usersOnGuilds.findUnique(args);
  }
}
