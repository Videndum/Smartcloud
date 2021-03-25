import * as TypeGraphQL from "type-graphql";
import { FindManyTwitterUserArgs } from "./args/FindManyTwitterUserArgs";
import { TwitterUser } from "../../../models/TwitterUser";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class FindManyTwitterUserResolver {
  @TypeGraphQL.Query(_returns => [TwitterUser], {
    nullable: false
  })
  async twitterUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTwitterUserArgs): Promise<TwitterUser[]> {
    return ctx.prisma.twitterUser.findMany(args);
  }
}
