import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCommandArgs } from "./args/AggregateCommandArgs";
import { CreateCommandArgs } from "./args/CreateCommandArgs";
import { DeleteCommandArgs } from "./args/DeleteCommandArgs";
import { DeleteManyCommandArgs } from "./args/DeleteManyCommandArgs";
import { FindFirstCommandArgs } from "./args/FindFirstCommandArgs";
import { FindManyCommandArgs } from "./args/FindManyCommandArgs";
import { FindUniqueCommandArgs } from "./args/FindUniqueCommandArgs";
import { UpdateCommandArgs } from "./args/UpdateCommandArgs";
import { UpdateManyCommandArgs } from "./args/UpdateManyCommandArgs";
import { UpsertCommandArgs } from "./args/UpsertCommandArgs";
import { Command } from "../../../models/Command";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCommand } from "../../outputs/AggregateCommand";

@TypeGraphQL.Resolver(_of => Command)
export class CommandCrudResolver {
  @TypeGraphQL.Query(_returns => Command, {
    nullable: true
  })
  async command(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCommandArgs): Promise<Command | null> {
    return ctx.prisma.command.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Command, {
    nullable: true
  })
  async findFirstCommand(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCommandArgs): Promise<Command | null> {
    return ctx.prisma.command.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Command], {
    nullable: false
  })
  async commands(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCommandArgs): Promise<Command[]> {
    return ctx.prisma.command.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Command, {
    nullable: false
  })
  async createCommand(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCommandArgs): Promise<Command> {
    return ctx.prisma.command.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Command, {
    nullable: true
  })
  async deleteCommand(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCommandArgs): Promise<Command | null> {
    return ctx.prisma.command.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Command, {
    nullable: true
  })
  async updateCommand(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCommandArgs): Promise<Command | null> {
    return ctx.prisma.command.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCommand(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCommandArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.command.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCommand(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCommandArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.command.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Command, {
    nullable: false
  })
  async upsertCommand(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCommandArgs): Promise<Command> {
    return ctx.prisma.command.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCommand, {
    nullable: false
  })
  async aggregateCommand(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCommandArgs): Promise<AggregateCommand> {
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

    return ctx.prisma.command.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
