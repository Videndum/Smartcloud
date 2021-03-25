import * as TypeGraphQL from "type-graphql";
import { UpdateManyUsersOnGuildsArgs } from "./args/UpdateManyUsersOnGuildsArgs";
import { UsersOnGuilds } from "../../../models/UsersOnGuilds";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => UsersOnGuilds)
export class UpdateManyUsersOnGuildsResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyUsersOnGuildsArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.usersOnGuilds.updateMany(args);
  }
}
