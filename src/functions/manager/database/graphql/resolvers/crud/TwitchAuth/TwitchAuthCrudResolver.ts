import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTwitchAuthArgs } from "./args/AggregateTwitchAuthArgs";
import { CreateTwitchAuthArgs } from "./args/CreateTwitchAuthArgs";
import { DeleteManyTwitchAuthArgs } from "./args/DeleteManyTwitchAuthArgs";
import { DeleteTwitchAuthArgs } from "./args/DeleteTwitchAuthArgs";
import { FindFirstTwitchAuthArgs } from "./args/FindFirstTwitchAuthArgs";
import { FindManyTwitchAuthArgs } from "./args/FindManyTwitchAuthArgs";
import { FindUniqueTwitchAuthArgs } from "./args/FindUniqueTwitchAuthArgs";
import { UpdateManyTwitchAuthArgs } from "./args/UpdateManyTwitchAuthArgs";
import { UpdateTwitchAuthArgs } from "./args/UpdateTwitchAuthArgs";
import { UpsertTwitchAuthArgs } from "./args/UpsertTwitchAuthArgs";
import { TwitchAuth } from "../../../models/TwitchAuth";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTwitchAuth } from "../../outputs/AggregateTwitchAuth";

@TypeGraphQL.Resolver(_of => TwitchAuth)
export class TwitchAuthCrudResolver {
  @TypeGraphQL.Query(_returns => TwitchAuth, {
    nullable: true
  })
  async twitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTwitchAuthArgs): Promise<TwitchAuth | null> {
    return ctx.prisma.twitchAuth.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => TwitchAuth, {
    nullable: true
  })
  async findFirstTwitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTwitchAuthArgs): Promise<TwitchAuth | null> {
    return ctx.prisma.twitchAuth.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [TwitchAuth], {
    nullable: false
  })
  async twitchAuths(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTwitchAuthArgs): Promise<TwitchAuth[]> {
    return ctx.prisma.twitchAuth.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TwitchAuth, {
    nullable: false
  })
  async createTwitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTwitchAuthArgs): Promise<TwitchAuth> {
    return ctx.prisma.twitchAuth.create(args);
  }

  @TypeGraphQL.Mutation(_returns => TwitchAuth, {
    nullable: true
  })
  async deleteTwitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTwitchAuthArgs): Promise<TwitchAuth | null> {
    return ctx.prisma.twitchAuth.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => TwitchAuth, {
    nullable: true
  })
  async updateTwitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTwitchAuthArgs): Promise<TwitchAuth | null> {
    return ctx.prisma.twitchAuth.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTwitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTwitchAuthArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.twitchAuth.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTwitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTwitchAuthArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.twitchAuth.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => TwitchAuth, {
    nullable: false
  })
  async upsertTwitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTwitchAuthArgs): Promise<TwitchAuth> {
    return ctx.prisma.twitchAuth.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTwitchAuth, {
    nullable: false
  })
  async aggregateTwitchAuth(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTwitchAuthArgs): Promise<AggregateTwitchAuth> {
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

    return ctx.prisma.twitchAuth.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
