import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePATArgs } from "./args/AggregatePATArgs";
import { PAT } from "../../../models/PAT";
import { AggregatePAT } from "../../outputs/AggregatePAT";

@TypeGraphQL.Resolver(_of => PAT)
export class AggregatePATResolver {
  @TypeGraphQL.Query(_returns => AggregatePAT, {
    nullable: false
  })
  async aggregatePAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePATArgs): Promise<AggregatePAT> {
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

    return ctx.prisma.pAT.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
