import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTwitterUserArgs } from "./args/AggregateTwitterUserArgs";
import { TwitterUser } from "../../../models/TwitterUser";
import { AggregateTwitterUser } from "../../outputs/AggregateTwitterUser";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class AggregateTwitterUserResolver {
  @TypeGraphQL.Query(_returns => AggregateTwitterUser, {
    nullable: false
  })
  async aggregateTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTwitterUserArgs): Promise<AggregateTwitterUser> {
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

    return ctx.prisma.twitterUser.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
