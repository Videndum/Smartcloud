import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUsersOnGuildsArgs } from "./args/AggregateUsersOnGuildsArgs";
import { CreateUsersOnGuildsArgs } from "./args/CreateUsersOnGuildsArgs";
import { DeleteManyUsersOnGuildsArgs } from "./args/DeleteManyUsersOnGuildsArgs";
import { DeleteUsersOnGuildsArgs } from "./args/DeleteUsersOnGuildsArgs";
import { FindFirstUsersOnGuildsArgs } from "./args/FindFirstUsersOnGuildsArgs";
import { FindManyUsersOnGuildsArgs } from "./args/FindManyUsersOnGuildsArgs";
import { FindUniqueUsersOnGuildsArgs } from "./args/FindUniqueUsersOnGuildsArgs";
import { UpdateManyUsersOnGuildsArgs } from "./args/UpdateManyUsersOnGuildsArgs";
import { UpdateUsersOnGuildsArgs } from "./args/UpdateUsersOnGuildsArgs";
import { UpsertUsersOnGuildsArgs } from "./args/UpsertUsersOnGuildsArgs";
import { UsersOnGuilds } from "../../../models/UsersOnGuilds";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUsersOnGuilds } from "../../outputs/AggregateUsersOnGuilds";

@TypeGraphQL.Resolver(_of => UsersOnGuilds)
export class UsersOnGuildsCrudResolver {
  @TypeGraphQL.Query(_returns => UsersOnGuilds, {
    nullable: true
  })
  async findUniqueUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueUsersOnGuildsArgs): Promise<UsersOnGuilds | null> {
    return ctx.prisma.usersOnGuilds.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => UsersOnGuilds, {
    nullable: true
  })
  async findFirstUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstUsersOnGuildsArgs): Promise<UsersOnGuilds | null> {
    return ctx.prisma.usersOnGuilds.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [UsersOnGuilds], {
    nullable: false
  })
  async findManyUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyUsersOnGuildsArgs): Promise<UsersOnGuilds[]> {
    return ctx.prisma.usersOnGuilds.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => UsersOnGuilds, {
    nullable: false
  })
  async createUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateUsersOnGuildsArgs): Promise<UsersOnGuilds> {
    return ctx.prisma.usersOnGuilds.create(args);
  }

  @TypeGraphQL.Mutation(_returns => UsersOnGuilds, {
    nullable: true
  })
  async deleteUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteUsersOnGuildsArgs): Promise<UsersOnGuilds | null> {
    return ctx.prisma.usersOnGuilds.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => UsersOnGuilds, {
    nullable: true
  })
  async updateUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateUsersOnGuildsArgs): Promise<UsersOnGuilds | null> {
    return ctx.prisma.usersOnGuilds.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyUsersOnGuildsArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.usersOnGuilds.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyUsersOnGuildsArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.usersOnGuilds.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => UsersOnGuilds, {
    nullable: false
  })
  async upsertUsersOnGuilds(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertUsersOnGuildsArgs): Promise<UsersOnGuilds> {
    return ctx.prisma.usersOnGuilds.upsert(args);
  }

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
