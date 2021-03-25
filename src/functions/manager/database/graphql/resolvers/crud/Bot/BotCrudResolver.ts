import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBotArgs } from "./args/AggregateBotArgs";
import { CreateBotArgs } from "./args/CreateBotArgs";
import { DeleteBotArgs } from "./args/DeleteBotArgs";
import { DeleteManyBotArgs } from "./args/DeleteManyBotArgs";
import { FindFirstBotArgs } from "./args/FindFirstBotArgs";
import { FindManyBotArgs } from "./args/FindManyBotArgs";
import { FindUniqueBotArgs } from "./args/FindUniqueBotArgs";
import { UpdateBotArgs } from "./args/UpdateBotArgs";
import { UpdateManyBotArgs } from "./args/UpdateManyBotArgs";
import { UpsertBotArgs } from "./args/UpsertBotArgs";
import { Bot } from "../../../models/Bot";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBot } from "../../outputs/AggregateBot";

@TypeGraphQL.Resolver(_of => Bot)
export class BotCrudResolver {
  @TypeGraphQL.Query(_returns => Bot, {
    nullable: true
  })
  async bot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueBotArgs): Promise<Bot | null> {
    return ctx.prisma.bot.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Bot, {
    nullable: true
  })
  async findFirstBot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstBotArgs): Promise<Bot | null> {
    return ctx.prisma.bot.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Bot], {
    nullable: false
  })
  async bots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyBotArgs): Promise<Bot[]> {
    return ctx.prisma.bot.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Bot, {
    nullable: false
  })
  async createBot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateBotArgs): Promise<Bot> {
    return ctx.prisma.bot.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Bot, {
    nullable: true
  })
  async deleteBot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteBotArgs): Promise<Bot | null> {
    return ctx.prisma.bot.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Bot, {
    nullable: true
  })
  async updateBot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateBotArgs): Promise<Bot | null> {
    return ctx.prisma.bot.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyBot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyBotArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.bot.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyBot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyBotArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.bot.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Bot, {
    nullable: false
  })
  async upsertBot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertBotArgs): Promise<Bot> {
    return ctx.prisma.bot.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateBot, {
    nullable: false
  })
  async aggregateBot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBotArgs): Promise<AggregateBot> {
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

    return ctx.prisma.bot.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
