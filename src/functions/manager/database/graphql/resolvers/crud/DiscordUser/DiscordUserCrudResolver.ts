import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDiscordUserArgs } from "./args/AggregateDiscordUserArgs";
import { CreateDiscordUserArgs } from "./args/CreateDiscordUserArgs";
import { DeleteDiscordUserArgs } from "./args/DeleteDiscordUserArgs";
import { DeleteManyDiscordUserArgs } from "./args/DeleteManyDiscordUserArgs";
import { FindFirstDiscordUserArgs } from "./args/FindFirstDiscordUserArgs";
import { FindManyDiscordUserArgs } from "./args/FindManyDiscordUserArgs";
import { FindUniqueDiscordUserArgs } from "./args/FindUniqueDiscordUserArgs";
import { UpdateDiscordUserArgs } from "./args/UpdateDiscordUserArgs";
import { UpdateManyDiscordUserArgs } from "./args/UpdateManyDiscordUserArgs";
import { UpsertDiscordUserArgs } from "./args/UpsertDiscordUserArgs";
import { DiscordUser } from "../../../models/DiscordUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDiscordUser } from "../../outputs/AggregateDiscordUser";

@TypeGraphQL.Resolver(_of => DiscordUser)
export class DiscordUserCrudResolver {
  @TypeGraphQL.Query(_returns => DiscordUser, {
    nullable: true
  })
  async discordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDiscordUserArgs): Promise<DiscordUser | null> {
    return ctx.prisma.discordUser.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => DiscordUser, {
    nullable: true
  })
  async findFirstDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstDiscordUserArgs): Promise<DiscordUser | null> {
    return ctx.prisma.discordUser.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [DiscordUser], {
    nullable: false
  })
  async discordUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDiscordUserArgs): Promise<DiscordUser[]> {
    return ctx.prisma.discordUser.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => DiscordUser, {
    nullable: false
  })
  async createDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateDiscordUserArgs): Promise<DiscordUser> {
    return ctx.prisma.discordUser.create(args);
  }

  @TypeGraphQL.Mutation(_returns => DiscordUser, {
    nullable: true
  })
  async deleteDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteDiscordUserArgs): Promise<DiscordUser | null> {
    return ctx.prisma.discordUser.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => DiscordUser, {
    nullable: true
  })
  async updateDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateDiscordUserArgs): Promise<DiscordUser | null> {
    return ctx.prisma.discordUser.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDiscordUserArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.discordUser.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDiscordUserArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.discordUser.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => DiscordUser, {
    nullable: false
  })
  async upsertDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDiscordUserArgs): Promise<DiscordUser> {
    return ctx.prisma.discordUser.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateDiscordUser, {
    nullable: false
  })
  async aggregateDiscordUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDiscordUserArgs): Promise<AggregateDiscordUser> {
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

    return ctx.prisma.discordUser.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
