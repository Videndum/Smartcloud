import * as TypeGraphQL from "type-graphql";
import { UpsertTwitterUserArgs } from "./args/UpsertTwitterUserArgs";
import { TwitterUser } from "../../../models/TwitterUser";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class UpsertTwitterUserResolver {
  @TypeGraphQL.Mutation(_returns => TwitterUser, {
    nullable: false
  })
  async upsertTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTwitterUserArgs): Promise<TwitterUser> {
    return ctx.prisma.twitterUser.upsert(args);
  }
}
