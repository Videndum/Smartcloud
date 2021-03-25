import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateActionArgs } from "./args/AggregateActionArgs";
import { Action } from "../../../models/Action";
import { AggregateAction } from "../../outputs/AggregateAction";

@TypeGraphQL.Resolver(_of => Action)
export class AggregateActionResolver {
  @TypeGraphQL.Query(_returns => AggregateAction, {
    nullable: false
  })
  async aggregateAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateActionArgs): Promise<AggregateAction> {
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

    return ctx.prisma.action.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
