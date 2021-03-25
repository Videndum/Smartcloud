import * as TypeGraphQL from "type-graphql";
import { UpdateManyAdminOnGuildsArgs } from "./args/UpdateManyAdminOnGuildsArgs";
import { AdminOnGuilds } from "../../../models/AdminOnGuilds";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => AdminOnGuilds)
export class UpdateManyAdminOnGuildsResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAdminOnGuildsArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.adminOnGuilds.updateMany(args);
  }
}
