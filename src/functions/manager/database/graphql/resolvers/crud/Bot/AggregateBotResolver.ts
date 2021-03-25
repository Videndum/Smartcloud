import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBotArgs } from "./args/AggregateBotArgs";
import { Bot } from "../../../models/Bot";
import { AggregateBot } from "../../outputs/AggregateBot";

@TypeGraphQL.Resolver(_of => Bot)
export class AggregateBotResolver {
  @TypeGraphQL.Query(_returns => AggregateBot, {
    nullable: false
  })
  async aggregateBot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBotArgs): Promise<AggregateBot> {
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

    return ctx.prisma.bot.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
