import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCommandArgs } from "./args/AggregateCommandArgs";
import { Command } from "../../../models/Command";
import { AggregateCommand } from "../../outputs/AggregateCommand";

@TypeGraphQL.Resolver(_of => Command)
export class AggregateCommandResolver {
  @TypeGraphQL.Query(_returns => AggregateCommand, {
    nullable: false
  })
  async aggregateCommand(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCommandArgs): Promise<AggregateCommand> {
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

    return ctx.prisma.command.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
