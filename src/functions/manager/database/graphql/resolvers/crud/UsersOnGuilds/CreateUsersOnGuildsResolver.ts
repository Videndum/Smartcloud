import * as TypeGraphQL from "type-graphql";
import { CreateUsersOnGuildsArgs } from "./args/CreateUsersOnGuildsArgs";
import { UsersOnGuilds } from "../../../models/UsersOnGuilds";

@TypeGraphQL.Resolver(_of => UsersOnGuilds)
export class CreateUsersOnGuildsResolver {
  @TypeGraphQL.Mutation(_returns => UsersOnGuilds, {
    nullable: false
  })
  async createUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateUsersOnGuildsArgs): Promise<UsersOnGuilds> {
    return ctx.prisma.usersOnGuilds.create(args);
  }
}
