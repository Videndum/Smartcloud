import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAdminOnGuildsArgs } from "./args/AggregateAdminOnGuildsArgs";
import { CreateAdminOnGuildsArgs } from "./args/CreateAdminOnGuildsArgs";
import { DeleteAdminOnGuildsArgs } from "./args/DeleteAdminOnGuildsArgs";
import { DeleteManyAdminOnGuildsArgs } from "./args/DeleteManyAdminOnGuildsArgs";
import { FindFirstAdminOnGuildsArgs } from "./args/FindFirstAdminOnGuildsArgs";
import { FindManyAdminOnGuildsArgs } from "./args/FindManyAdminOnGuildsArgs";
import { FindUniqueAdminOnGuildsArgs } from "./args/FindUniqueAdminOnGuildsArgs";
import { UpdateAdminOnGuildsArgs } from "./args/UpdateAdminOnGuildsArgs";
import { UpdateManyAdminOnGuildsArgs } from "./args/UpdateManyAdminOnGuildsArgs";
import { UpsertAdminOnGuildsArgs } from "./args/UpsertAdminOnGuildsArgs";
import { AdminOnGuilds } from "../../../models/AdminOnGuilds";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAdminOnGuilds } from "../../outputs/AggregateAdminOnGuilds";

@TypeGraphQL.Resolver(_of => AdminOnGuilds)
export class AdminOnGuildsCrudResolver {
  @TypeGraphQL.Query(_returns => AdminOnGuilds, {
    nullable: true
  })
  async findUniqueAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueAdminOnGuildsArgs): Promise<AdminOnGuilds | null> {
    return ctx.prisma.adminOnGuilds.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => AdminOnGuilds, {
    nullable: true
  })
  async findFirstAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstAdminOnGuildsArgs): Promise<AdminOnGuilds | null> {
    return ctx.prisma.adminOnGuilds.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [AdminOnGuilds], {
    nullable: false
  })
  async findManyAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyAdminOnGuildsArgs): Promise<AdminOnGuilds[]> {
    return ctx.prisma.adminOnGuilds.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AdminOnGuilds, {
    nullable: false
  })
  async createAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateAdminOnGuildsArgs): Promise<AdminOnGuilds> {
    return ctx.prisma.adminOnGuilds.create(args);
  }

  @TypeGraphQL.Mutation(_returns => AdminOnGuilds, {
    nullable: true
  })
  async deleteAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteAdminOnGuildsArgs): Promise<AdminOnGuilds | null> {
    return ctx.prisma.adminOnGuilds.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => AdminOnGuilds, {
    nullable: true
  })
  async updateAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateAdminOnGuildsArgs): Promise<AdminOnGuilds | null> {
    return ctx.prisma.adminOnGuilds.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyAdminOnGuildsArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.adminOnGuilds.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyAdminOnGuildsArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.adminOnGuilds.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AdminOnGuilds, {
    nullable: false
  })
  async upsertAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertAdminOnGuildsArgs): Promise<AdminOnGuilds> {
    return ctx.prisma.adminOnGuilds.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateAdminOnGuilds, {
    nullable: false
  })
  async aggregateAdminOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAdminOnGuildsArgs): Promise<AggregateAdminOnGuilds> {
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

    return ctx.prisma.adminOnGuilds.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
