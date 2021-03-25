import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateActionArgs } from "./args/AggregateActionArgs";
import { CreateActionArgs } from "./args/CreateActionArgs";
import { DeleteActionArgs } from "./args/DeleteActionArgs";
import { DeleteManyActionArgs } from "./args/DeleteManyActionArgs";
import { FindFirstActionArgs } from "./args/FindFirstActionArgs";
import { FindManyActionArgs } from "./args/FindManyActionArgs";
import { FindUniqueActionArgs } from "./args/FindUniqueActionArgs";
import { UpdateActionArgs } from "./args/UpdateActionArgs";
import { UpdateManyActionArgs } from "./args/UpdateManyActionArgs";
import { UpsertActionArgs } from "./args/UpsertActionArgs";
import { Action } from "../../../models/Action";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAction } from "../../outputs/AggregateAction";

@TypeGraphQL.Resolver(_of => Action)
export class ActionCrudResolver {
  @TypeGraphQL.Query(_returns => Action, {
    nullable: true
  })
  async action(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueActionArgs): Promise<Action | null> {
    return ctx.prisma.action.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Action, {
    nullable: true
  })
  async findFirstAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstActionArgs): Promise<Action | null> {
    return ctx.prisma.action.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Action], {
    nullable: false
  })
  async actions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyActionArgs): Promise<Action[]> {
    return ctx.prisma.action.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Action, {
    nullable: false
  })
  async createAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateActionArgs): Promise<Action> {
    return ctx.prisma.action.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Action, {
    nullable: true
  })
  async deleteAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteActionArgs): Promise<Action | null> {
    return ctx.prisma.action.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Action, {
    nullable: true
  })
  async updateAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateActionArgs): Promise<Action | null> {
    return ctx.prisma.action.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyActionArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.action.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyActionArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.action.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Action, {
    nullable: false
  })
  async upsertAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertActionArgs): Promise<Action> {
    return ctx.prisma.action.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateAction, {
    nullable: false
  })
  async aggregateAction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateActionArgs): Promise<AggregateAction> {
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

    return ctx.prisma.action.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
