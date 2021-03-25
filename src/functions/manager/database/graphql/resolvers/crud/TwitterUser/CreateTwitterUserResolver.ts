import * as TypeGraphQL from "type-graphql";
import { CreateTwitterUserArgs } from "./args/CreateTwitterUserArgs";
import { TwitterUser } from "../../../models/TwitterUser";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class CreateTwitterUserResolver {
  @TypeGraphQL.Mutation(_returns => TwitterUser, {
    nullable: false
  })
  async createTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTwitterUserArgs): Promise<TwitterUser> {
    return ctx.prisma.twitterUser.create(args);
  }
}
