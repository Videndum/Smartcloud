import * as TypeGraphQL from "type-graphql";
import { TwitchUser } from "../../../models/TwitchUser";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => TwitchUser)
export class TwitchUserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() twitchUser: TwitchUser, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return ctx.prisma.twitchUser.findUnique({
      where: {
        id: twitchUser.id,
      },
    }).user({});
  }
}
