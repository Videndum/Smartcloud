import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateHostArgs } from "./args/AggregateHostArgs";
import { CreateHostArgs } from "./args/CreateHostArgs";
import { DeleteHostArgs } from "./args/DeleteHostArgs";
import { DeleteManyHostArgs } from "./args/DeleteManyHostArgs";
import { FindFirstHostArgs } from "./args/FindFirstHostArgs";
import { FindManyHostArgs } from "./args/FindManyHostArgs";
import { FindUniqueHostArgs } from "./args/FindUniqueHostArgs";
import { UpdateHostArgs } from "./args/UpdateHostArgs";
import { UpdateManyHostArgs } from "./args/UpdateManyHostArgs";
import { UpsertHostArgs } from "./args/UpsertHostArgs";
import { Host } from "../../../models/Host";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateHost } from "../../outputs/AggregateHost";

@TypeGraphQL.Resolver(_of => Host)
export class HostCrudResolver {
  @TypeGraphQL.Query(_returns => Host, {
    nullable: true
  })
  async host(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueHostArgs): Promise<Host | null> {
    return ctx.prisma.host.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Host, {
    nullable: true
  })
  async findFirstHost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstHostArgs): Promise<Host | null> {
    return ctx.prisma.host.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Host], {
    nullable: false
  })
  async hosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyHostArgs): Promise<Host[]> {
    return ctx.prisma.host.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Host, {
    nullable: false
  })
  async createHost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateHostArgs): Promise<Host> {
    return ctx.prisma.host.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Host, {
    nullable: true
  })
  async deleteHost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteHostArgs): Promise<Host | null> {
    return ctx.prisma.host.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Host, {
    nullable: true
  })
  async updateHost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateHostArgs): Promise<Host | null> {
    return ctx.prisma.host.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyHost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyHostArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.host.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyHost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyHostArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.host.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Host, {
    nullable: false
  })
  async upsertHost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertHostArgs): Promise<Host> {
    return ctx.prisma.host.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateHost, {
    nullable: false
  })
  async aggregateHost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateHostArgs): Promise<AggregateHost> {
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

    return ctx.prisma.host.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
