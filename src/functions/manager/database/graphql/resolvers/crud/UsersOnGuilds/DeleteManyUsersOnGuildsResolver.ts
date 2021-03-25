import * as TypeGraphQL from "type-graphql";
import { DeleteManyUsersOnGuildsArgs } from "./args/DeleteManyUsersOnGuildsArgs";
import { UsersOnGuilds } from "../../../models/UsersOnGuilds";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => UsersOnGuilds)
export class DeleteManyUsersOnGuildsResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyUsersOnGuildsArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.usersOnGuilds.deleteMany(args);
  }
}
