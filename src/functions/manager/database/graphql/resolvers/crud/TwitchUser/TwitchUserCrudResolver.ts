import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTwitchUserArgs } from "./args/AggregateTwitchUserArgs";
import { CreateTwitchUserArgs } from "./args/CreateTwitchUserArgs";
import { DeleteManyTwitchUserArgs } from "./args/DeleteManyTwitchUserArgs";
import { DeleteTwitchUserArgs } from "./args/DeleteTwitchUserArgs";
import { FindFirstTwitchUserArgs } from "./args/FindFirstTwitchUserArgs";
import { FindManyTwitchUserArgs } from "./args/FindManyTwitchUserArgs";
import { FindUniqueTwitchUserArgs } from "./args/FindUniqueTwitchUserArgs";
import { UpdateManyTwitchUserArgs } from "./args/UpdateManyTwitchUserArgs";
import { UpdateTwitchUserArgs } from "./args/UpdateTwitchUserArgs";
import { UpsertTwitchUserArgs } from "./args/UpsertTwitchUserArgs";
import { TwitchUser } from "../../../models/TwitchUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTwitchUser } from "../../outputs/AggregateTwitchUser";

@TypeGraphQL.Resolver(_of => TwitchUser)
export class TwitchUserCrudResolver {
  @TypeGraphQL.Query(_returns => TwitchUser, {
    nullable: true
  })
  async twitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTwitchUserArgs): Promise<TwitchUser | null> {
    return ctx.prisma.twitchUser.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => TwitchUser, {
    nullable: true
  })
  async findFirstTwitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTwitchUserArgs): Promise<TwitchUser | null> {
    return ctx.prisma.twitchUser.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [TwitchUser], {
    nullable: false
  })
  async twitchUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTwitchUserArgs): Promise<TwitchUser[]> {
    return ctx.prisma.twitchUser.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TwitchUser, {
    nullable: false
  })
  async createTwitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTwitchUserArgs): Promise<TwitchUser> {
    return ctx.prisma.twitchUser.create(args);
  }

  @TypeGraphQL.Mutation(_returns => TwitchUser, {
    nullable: true
  })
  async deleteTwitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTwitchUserArgs): Promise<TwitchUser | null> {
    return ctx.prisma.twitchUser.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => TwitchUser, {
    nullable: true
  })
  async updateTwitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTwitchUserArgs): Promise<TwitchUser | null> {
    return ctx.prisma.twitchUser.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTwitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTwitchUserArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.twitchUser.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTwitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTwitchUserArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.twitchUser.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TwitchUser, {
    nullable: false
  })
  async upsertTwitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTwitchUserArgs): Promise<TwitchUser> {
    return ctx.prisma.twitchUser.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTwitchUser, {
    nullable: false
  })
  async aggregateTwitchUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTwitchUserArgs): Promise<AggregateTwitchUser> {
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

    return ctx.prisma.twitchUser.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
