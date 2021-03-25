import * as TypeGraphQL from "type-graphql";
import { FindManyUsersOnGuildsArgs } from "./args/FindManyUsersOnGuildsArgs";
import { UsersOnGuilds } from "../../../models/UsersOnGuilds";

@TypeGraphQL.Resolver(_of => UsersOnGuilds)
export class FindManyUsersOnGuildsResolver {
  @TypeGraphQL.Query(_returns => [UsersOnGuilds], {
    nullable: false
  })
  async findManyUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyUsersOnGuildsArgs): Promise<UsersOnGuilds[]> {
    return ctx.prisma.usersOnGuilds.findMany(args);
  }
}
