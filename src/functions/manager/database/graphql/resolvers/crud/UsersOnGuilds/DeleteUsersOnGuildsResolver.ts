import * as TypeGraphQL from "type-graphql";
import { DeleteUsersOnGuildsArgs } from "./args/DeleteUsersOnGuildsArgs";
import { UsersOnGuilds } from "../../../models/UsersOnGuilds";

@TypeGraphQL.Resolver(_of => UsersOnGuilds)
export class DeleteUsersOnGuildsResolver {
  @TypeGraphQL.Mutation(_returns => UsersOnGuilds, {
    nullable: true
  })
  async deleteUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteUsersOnGuildsArgs): Promise<UsersOnGuilds | null> {
    return ctx.prisma.usersOnGuilds.delete(args);
  }
}
