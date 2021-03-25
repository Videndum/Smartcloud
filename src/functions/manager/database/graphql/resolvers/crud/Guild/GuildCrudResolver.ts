import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGuildArgs } from "./args/AggregateGuildArgs";
import { CreateGuildArgs } from "./args/CreateGuildArgs";
import { DeleteGuildArgs } from "./args/DeleteGuildArgs";
import { DeleteManyGuildArgs } from "./args/DeleteManyGuildArgs";
import { FindFirstGuildArgs } from "./args/FindFirstGuildArgs";
import { FindManyGuildArgs } from "./args/FindManyGuildArgs";
import { FindUniqueGuildArgs } from "./args/FindUniqueGuildArgs";
import { UpdateGuildArgs } from "./args/UpdateGuildArgs";
import { UpdateManyGuildArgs } from "./args/UpdateManyGuildArgs";
import { UpsertGuildArgs } from "./args/UpsertGuildArgs";
import { Guild } from "../../../models/Guild";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateGuild } from "../../outputs/AggregateGuild";

@TypeGraphQL.Resolver(_of => Guild)
export class GuildCrudResolver {
  @TypeGraphQL.Query(_returns => Guild, {
    nullable: true
  })
  async guild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueGuildArgs): Promise<Guild | null> {
    return ctx.prisma.guild.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Guild, {
    nullable: true
  })
  async findFirstGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstGuildArgs): Promise<Guild | null> {
    return ctx.prisma.guild.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Guild], {
    nullable: false
  })
  async guilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyGuildArgs): Promise<Guild[]> {
    return ctx.prisma.guild.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Guild, {
    nullable: false
  })
  async createGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateGuildArgs): Promise<Guild> {
    return ctx.prisma.guild.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Guild, {
    nullable: true
  })
  async deleteGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteGuildArgs): Promise<Guild | null> {
    return ctx.prisma.guild.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Guild, {
    nullable: true
  })
  async updateGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateGuildArgs): Promise<Guild | null> {
    return ctx.prisma.guild.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyGuildArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.guild.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyGuildArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.guild.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Guild, {
    nullable: false
  })
  async upsertGuild(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertGuildArgs): Promise<Guild> {
    return ctx.prisma.guild.upsert(args);
  }

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
