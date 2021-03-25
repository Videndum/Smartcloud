import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateManagerArgs } from "./args/AggregateManagerArgs";
import { CreateManagerArgs } from "./args/CreateManagerArgs";
import { DeleteManagerArgs } from "./args/DeleteManagerArgs";
import { DeleteManyManagerArgs } from "./args/DeleteManyManagerArgs";
import { FindFirstManagerArgs } from "./args/FindFirstManagerArgs";
import { FindManyManagerArgs } from "./args/FindManyManagerArgs";
import { FindUniqueManagerArgs } from "./args/FindUniqueManagerArgs";
import { UpdateManagerArgs } from "./args/UpdateManagerArgs";
import { UpdateManyManagerArgs } from "./args/UpdateManyManagerArgs";
import { UpsertManagerArgs } from "./args/UpsertManagerArgs";
import { Manager } from "../../../models/Manager";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateManager } from "../../outputs/AggregateManager";

@TypeGraphQL.Resolver(_of => Manager)
export class ManagerCrudResolver {
  @TypeGraphQL.Query(_returns => Manager, {
    nullable: true
  })
  async manager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueManagerArgs): Promise<Manager | null> {
    return ctx.prisma.manager.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Manager, {
    nullable: true
  })
  async findFirstManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstManagerArgs): Promise<Manager | null> {
    return ctx.prisma.manager.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Manager], {
    nullable: false
  })
  async managers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyManagerArgs): Promise<Manager[]> {
    return ctx.prisma.manager.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Manager, {
    nullable: false
  })
  async createManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateManagerArgs): Promise<Manager> {
    return ctx.prisma.manager.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Manager, {
    nullable: true
  })
  async deleteManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManagerArgs): Promise<Manager | null> {
    return ctx.prisma.manager.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Manager, {
    nullable: true
  })
  async updateManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManagerArgs): Promise<Manager | null> {
    return ctx.prisma.manager.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyManagerArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.manager.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyManagerArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.manager.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Manager, {
    nullable: false
  })
  async upsertManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertManagerArgs): Promise<Manager> {
    return ctx.prisma.manager.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateManager, {
    nullable: false
  })
  async aggregateManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateManagerArgs): Promise<AggregateManager> {
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

    return ctx.prisma.manager.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
