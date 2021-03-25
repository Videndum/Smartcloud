import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateShardArgs } from "./args/AggregateShardArgs";
import { Shard } from "../../../models/Shard";
import { AggregateShard } from "../../outputs/AggregateShard";

@TypeGraphQL.Resolver(_of => Shard)
export class AggregateShardResolver {
  @TypeGraphQL.Query(_returns => AggregateShard, {
    nullable: false
  })
  async aggregateShard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateShardArgs): Promise<AggregateShard> {
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

    return ctx.prisma.shard.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
