import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTwitchUserArgs } from "./args/AggregateTwitchUserArgs";
import { TwitchUser } from "../../../models/TwitchUser";
import { AggregateTwitchUser } from "../../outputs/AggregateTwitchUser";

@TypeGraphQL.Resolver(_of => TwitchUser)
export class AggregateTwitchUserResolver {
  @TypeGraphQL.Query(_returns => AggregateTwitchUser, {
    nullable: false
  })
  async aggregateTwitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTwitchUserArgs): Promise<AggregateTwitchUser> {
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

    return ctx.prisma.twitchUser.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
