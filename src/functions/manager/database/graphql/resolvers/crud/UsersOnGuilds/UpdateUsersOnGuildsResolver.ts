import * as TypeGraphQL from "type-graphql";
import { UpdateUsersOnGuildsArgs } from "./args/UpdateUsersOnGuildsArgs";
import { UsersOnGuilds } from "../../../models/UsersOnGuilds";

@TypeGraphQL.Resolver(_of => UsersOnGuilds)
export class UpdateUsersOnGuildsResolver {
  @TypeGraphQL.Mutation(_returns => UsersOnGuilds, {
    nullable: true
  })
  async updateUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateUsersOnGuildsArgs): Promise<UsersOnGuilds | null> {
    return ctx.prisma.usersOnGuilds.update(args);
  }
}
