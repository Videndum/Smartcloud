import * as TypeGraphQL from "type-graphql";
import { UpdateTwitterUserArgs } from "./args/UpdateTwitterUserArgs";
import { TwitterUser } from "../../../models/TwitterUser";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class UpdateTwitterUserResolver {
  @TypeGraphQL.Mutation(_returns => TwitterUser, {
    nullable: true
  })
  async updateTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTwitterUserArgs): Promise<TwitterUser | null> {
    return ctx.prisma.twitterUser.update(args);
  }
}
