import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDiscordUserArgs } from "./args/AggregateDiscordUserArgs";
import { DiscordUser } from "../../../models/DiscordUser";
import { AggregateDiscordUser } from "../../outputs/AggregateDiscordUser";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class AggregateDiscordUserResolver {
  @TypeGraphQL.Query(_returns => AggregateDiscordUser, {
    nullable: false
  })
  async aggregateDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDiscordUserArgs): Promise<AggregateDiscordUser> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          // remove __typename and others
          .filter(([key, value]) => !key.startsWith("__"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.discordUser.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
