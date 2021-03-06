import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAdminOnGuildsArgs } from "./args/AggregateAdminOnGuildsArgs";
import { AdminOnGuilds } from "../../../models/AdminOnGuilds";
import { AggregateAdminOnGuilds } from "../../outputs/AggregateAdminOnGuilds";

@TypeGraphQL.Resolver(_of => AdminOnGuilds)
export class AggregateAdminOnGuildsResolver {
  @TypeGraphQL.Query(_returns => AggregateAdminOnGuilds, {
    nullable: false
  })
  async aggregateAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAdminOnGuildsArgs): Promise<AggregateAdminOnGuilds> {
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

    return ctx.prisma.adminOnGuilds.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
