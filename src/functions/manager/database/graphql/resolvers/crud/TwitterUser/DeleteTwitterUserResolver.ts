import * as TypeGraphQL from "type-graphql";
import { DeleteTwitterUserArgs } from "./args/DeleteTwitterUserArgs";
import { TwitterUser } from "../../../models/TwitterUser";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class DeleteTwitterUserResolver {
  @TypeGraphQL.Mutation(_returns => TwitterUser, {
    nullable: true
  })
  async deleteTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTwitterUserArgs): Promise<TwitterUser | null> {
    return ctx.prisma.twitterUser.delete(args);
  }
}
