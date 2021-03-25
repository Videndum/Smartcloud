import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTwitchAuthArgs } from "./args/AggregateTwitchAuthArgs";
import { TwitchAuth } from "../../../models/TwitchAuth";
import { AggregateTwitchAuth } from "../../outputs/AggregateTwitchAuth";

@TypeGraphQL.Resolver(_of => TwitchAuth)
export class AggregateTwitchAuthResolver {
  @TypeGraphQL.Query(_returns => AggregateTwitchAuth, {
    nullable: false
  })
  async aggregateTwitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTwitchAuthArgs): Promise<AggregateTwitchAuth> {
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

    return ctx.prisma.twitchAuth.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
