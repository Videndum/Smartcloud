import * as TypeGraphQL from "type-graphql";
import { Bot } from "../../../models/Bot";
import { TwitchAuth } from "../../../models/TwitchAuth";
import { TwitchAuthBotArgs } from "./args/TwitchAuthBotArgs";

@TypeGraphQL.Resolver(_of => TwitchAuth)
export class TwitchAuthRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Bot], {
    nullable: false
  })
  async Bot(@TypeGraphQL.Root() twitchAuth: TwitchAuth, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TwitchAuthBotArgs): Promise<Bot[]> {
    return ctx.prisma.twitchAuth.findUnique({
      where: {
        id: twitchAuth.id,
      },
    }).Bot(args);
  }
}
