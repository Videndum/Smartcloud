import * as TypeGraphQL from "type-graphql";
import { UpsertUsersOnGuildsArgs } from "./args/UpsertUsersOnGuildsArgs";
import { UsersOnGuilds } from "../../../models/UsersOnGuilds";

@TypeGraphQL.Resolver(_of => UsersOnGuilds)
export class UpsertUsersOnGuildsResolver {
  @TypeGraphQL.Mutation(_returns => UsersOnGuilds, {
    nullable: false
  })
  async upsertUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertUsersOnGuildsArgs): Promise<UsersOnGuilds> {
    return ctx.prisma.usersOnGuilds.upsert(args);
  }
}
