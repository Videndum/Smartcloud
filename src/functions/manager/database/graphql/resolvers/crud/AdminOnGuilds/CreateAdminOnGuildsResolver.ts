import * as TypeGraphQL from "type-graphql";
import { CreateAdminOnGuildsArgs } from "./args/CreateAdminOnGuildsArgs";
import { AdminOnGuilds } from "../../../models/AdminOnGuilds";

@TypeGraphQL.Resolver(_of => AdminOnGuilds)
export class CreateAdminOnGuildsResolver {
  @TypeGraphQL.Mutation(_returns => AdminOnGuilds, {
    nullable: false
  })
  async createAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateAdminOnGuildsArgs): Promise<AdminOnGuilds> {
    return ctx.prisma.adminOnGuilds.create(args);
  }
}
