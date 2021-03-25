import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateHostArgs } from "./args/AggregateHostArgs";
import { Host } from "../../../models/Host";
import { AggregateHost } from "../../outputs/AggregateHost";

@TypeGraphQL.Resolver(_of => Host)
export class AggregateHostResolver {
  @TypeGraphQL.Query(_returns => AggregateHost, {
    nullable: false
  })
  async aggregateHost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateHostArgs): Promise<AggregateHost> {
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

    return ctx.prisma.host.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
