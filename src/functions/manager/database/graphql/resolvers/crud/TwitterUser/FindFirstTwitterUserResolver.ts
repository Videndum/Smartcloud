import * as TypeGraphQL from "type-graphql";
import { FindFirstTwitterUserArgs } from "./args/FindFirstTwitterUserArgs";
import { TwitterUser } from "../../../models/TwitterUser";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class FindFirstTwitterUserResolver {
  @TypeGraphQL.Query(_returns => TwitterUser, {
    nullable: true
  })
  async findFirstTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTwitterUserArgs): Promise<TwitterUser | null> {
    return ctx.prisma.twitterUser.findFirst(args);
  }
}
