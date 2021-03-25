import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGuildArgs } from "./args/AggregateGuildArgs";
import { Guild } from "../../../models/Guild";
import { AggregateGuild } from "../../outputs/AggregateGuild";

@TypeGraphQL.Resolver(_of => Guild)
export class AggregateGuildResolver {
  @TypeGraphQL.Query(_returns => AggregateGuild, {
    nullable: false
  })
  async aggregateGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGuildArgs): Promise<AggregateGuild> {
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

    return ctx.prisma.guild.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
