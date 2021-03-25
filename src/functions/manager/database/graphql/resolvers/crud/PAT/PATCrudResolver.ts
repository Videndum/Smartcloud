import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePATArgs } from "./args/AggregatePATArgs";
import { CreatePATArgs } from "./args/CreatePATArgs";
import { DeleteManyPATArgs } from "./args/DeleteManyPATArgs";
import { DeletePATArgs } from "./args/DeletePATArgs";
import { FindFirstPATArgs } from "./args/FindFirstPATArgs";
import { FindManyPATArgs } from "./args/FindManyPATArgs";
import { FindUniquePATArgs } from "./args/FindUniquePATArgs";
import { UpdateManyPATArgs } from "./args/UpdateManyPATArgs";
import { UpdatePATArgs } from "./args/UpdatePATArgs";
import { UpsertPATArgs } from "./args/UpsertPATArgs";
import { PAT } from "../../../models/PAT";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePAT } from "../../outputs/AggregatePAT";

@TypeGraphQL.Resolver(_of => PAT)
export class PATCrudResolver {
  @TypeGraphQL.Query(_returns => PAT, {
    nullable: true
  })
  async pAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniquePATArgs): Promise<PAT | null> {
    return ctx.prisma.pAT.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => PAT, {
    nullable: true
  })
  async findFirstPAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstPATArgs): Promise<PAT | null> {
    return ctx.prisma.pAT.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [PAT], {
    nullable: false
  })
  async pATS(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyPATArgs): Promise<PAT[]> {
    return ctx.prisma.pAT.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => PAT, {
    nullable: false
  })
  async createPAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreatePATArgs): Promise<PAT> {
    return ctx.prisma.pAT.create(args);
  }

  @TypeGraphQL.Mutation(_returns => PAT, {
    nullable: true
  })
  async deletePAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeletePATArgs): Promise<PAT | null> {
    return ctx.prisma.pAT.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => PAT, {
    nullable: true
  })
  async updatePAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdatePATArgs): Promise<PAT | null> {
    return ctx.prisma.pAT.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyPATArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.pAT.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyPATArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.pAT.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => PAT, {
    nullable: false
  })
  async upsertPAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertPATArgs): Promise<PAT> {
    return ctx.prisma.pAT.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregatePAT, {
    nullable: false
  })
  async aggregatePAT(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePATArgs): Promise<AggregatePAT> {
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

    return ctx.prisma.pAT.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
