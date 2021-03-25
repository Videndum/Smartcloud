import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUsersOnGuildsArgs } from "./args/AggregateUsersOnGuildsArgs";
import { UsersOnGuilds } from "../../../models/UsersOnGuilds";
import { AggregateUsersOnGuilds } from "../../outputs/AggregateUsersOnGuilds";

@TypeGraphQL.Resolver(_of => UsersOnGuilds)
export class AggregateUsersOnGuildsResolver {
  @TypeGraphQL.Query(_returns => AggregateUsersOnGuilds, {
    nullable: false
  })
  async aggregateUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUsersOnGuildsArgs): Promise<AggregateUsersOnGuilds> {
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

    return ctx.prisma.usersOnGuilds.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
