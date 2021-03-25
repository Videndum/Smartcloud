import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateShardArgs } from "./args/AggregateShardArgs";
import { CreateShardArgs } from "./args/CreateShardArgs";
import { DeleteManyShardArgs } from "./args/DeleteManyShardArgs";
import { DeleteShardArgs } from "./args/DeleteShardArgs";
import { FindFirstShardArgs } from "./args/FindFirstShardArgs";
import { FindManyShardArgs } from "./args/FindManyShardArgs";
import { FindUniqueShardArgs } from "./args/FindUniqueShardArgs";
import { UpdateManyShardArgs } from "./args/UpdateManyShardArgs";
import { UpdateShardArgs } from "./args/UpdateShardArgs";
import { UpsertShardArgs } from "./args/UpsertShardArgs";
import { Shard } from "../../../models/Shard";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateShard } from "../../outputs/AggregateShard";

@TypeGraphQL.Resolver(_of => Shard)
export class ShardCrudResolver {
  @TypeGraphQL.Query(_returns => Shard, {
    nullable: true
  })
  async shard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueShardArgs): Promise<Shard | null> {
    return ctx.prisma.shard.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Shard, {
    nullable: true
  })
  async findFirstShard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstShardArgs): Promise<Shard | null> {
    return ctx.prisma.shard.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Shard], {
    nullable: false
  })
  async shards(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyShardArgs): Promise<Shard[]> {
    return ctx.prisma.shard.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Shard, {
    nullable: false
  })
  async createShard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateShardArgs): Promise<Shard> {
    return ctx.prisma.shard.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Shard, {
    nullable: true
  })
  async deleteShard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteShardArgs): Promise<Shard | null> {
    return ctx.prisma.shard.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Shard, {
    nullable: true
  })
  async updateShard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateShardArgs): Promise<Shard | null> {
    return ctx.prisma.shard.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyShard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyShardArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.shard.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyShard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyShardArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.shard.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Shard, {
    nullable: false
  })
  async upsertShard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertShardArgs): Promise<Shard> {
    return ctx.prisma.shard.upsert(args);
  }

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
