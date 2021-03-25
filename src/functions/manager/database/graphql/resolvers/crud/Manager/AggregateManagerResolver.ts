import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateManagerArgs } from "./args/AggregateManagerArgs";
import { Manager } from "../../../models/Manager";
import { AggregateManager } from "../../outputs/AggregateManager";

@TypeGraphQL.Resolver(_of => Manager)
export class AggregateManagerResolver {
  @TypeGraphQL.Query(_returns => AggregateManager, {
    nullable: false
  })
  async aggregateManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateManagerArgs): Promise<AggregateManager> {
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

    return ctx.prisma.manager.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
