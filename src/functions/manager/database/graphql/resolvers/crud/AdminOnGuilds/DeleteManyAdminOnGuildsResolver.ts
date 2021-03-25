import * as TypeGraphQL from "type-graphql";
import { DeleteManyAdminOnGuildsArgs } from "./args/DeleteManyAdminOnGuildsArgs";
import { AdminOnGuilds } from "../../../models/AdminOnGuilds";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => AdminOnGuilds)
export class DeleteManyAdminOnGuildsResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAdminOnGuildsArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.adminOnGuilds.deleteMany(args);
  }
}
