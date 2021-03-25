import * as TypeGraphQL from "type-graphql";
import { FindUniqueTwitterUserArgs } from "./args/FindUniqueTwitterUserArgs";
import { TwitterUser } from "../../../models/TwitterUser";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class FindUniqueTwitterUserResolver {
  @TypeGraphQL.Query(_returns => TwitterUser, {
    nullable: true
  })
  async twitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTwitterUserArgs): Promise<TwitterUser | null> {
    return ctx.prisma.twitterUser.findUnique(args);
  }
}
