import * as TypeGraphQL from "type-graphql";
import { TwitterUser } from "../../../models/TwitterUser";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class TwitterUserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() twitterUser: TwitterUser, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return ctx.prisma.twitterUser.findUnique({
      where: {
        id: twitterUser.id,
      },
    }).user({});
  }
}
