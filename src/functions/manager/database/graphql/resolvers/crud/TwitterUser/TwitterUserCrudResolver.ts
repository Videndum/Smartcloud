import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTwitterUserArgs } from "./args/AggregateTwitterUserArgs";
import { CreateTwitterUserArgs } from "./args/CreateTwitterUserArgs";
import { DeleteManyTwitterUserArgs } from "./args/DeleteManyTwitterUserArgs";
import { DeleteTwitterUserArgs } from "./args/DeleteTwitterUserArgs";
import { FindFirstTwitterUserArgs } from "./args/FindFirstTwitterUserArgs";
import { FindManyTwitterUserArgs } from "./args/FindManyTwitterUserArgs";
import { FindUniqueTwitterUserArgs } from "./args/FindUniqueTwitterUserArgs";
import { UpdateManyTwitterUserArgs } from "./args/UpdateManyTwitterUserArgs";
import { UpdateTwitterUserArgs } from "./args/UpdateTwitterUserArgs";
import { UpsertTwitterUserArgs } from "./args/UpsertTwitterUserArgs";
import { TwitterUser } from "../../../models/TwitterUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTwitterUser } from "../../outputs/AggregateTwitterUser";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class TwitterUserCrudResolver {
  @TypeGraphQL.Query(_returns => TwitterUser, {
    nullable: true
  })
  async twitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTwitterUserArgs): Promise<TwitterUser | null> {
    return ctx.prisma.twitterUser.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => TwitterUser, {
    nullable: true
  })
  async findFirstTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTwitterUserArgs): Promise<TwitterUser | null> {
    return ctx.prisma.twitterUser.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [TwitterUser], {
    nullable: false
  })
  async twitterUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTwitterUserArgs): Promise<TwitterUser[]> {
    return ctx.prisma.twitterUser.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TwitterUser, {
    nullable: false
  })
  async createTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTwitterUserArgs): Promise<TwitterUser> {
    return ctx.prisma.twitterUser.create(args);
  }

  @TypeGraphQL.Mutation(_returns => TwitterUser, {
    nullable: true
  })
  async deleteTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTwitterUserArgs): Promise<TwitterUser | null> {
    return ctx.prisma.twitterUser.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => TwitterUser, {
    nullable: true
  })
  async updateTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTwitterUserArgs): Promise<TwitterUser | null> {
    return ctx.prisma.twitterUser.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTwitterUserArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.twitterUser.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTwitterUserArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.twitterUser.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TwitterUser, {
    nullable: false
  })
  async upsertTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTwitterUserArgs): Promise<TwitterUser> {
    return ctx.prisma.twitterUser.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTwitterUser, {
    nullable: false
  })
  async aggregateTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTwitterUserArgs): Promise<AggregateTwitterUser> {
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

    return ctx.prisma.twitterUser.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
