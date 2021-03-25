import * as TypeGraphQL from "type-graphql";
import { UpsertManagerArgs } from "./args/UpsertManagerArgs";
import { Manager } from "../../../models/Manager";

@TypeGraphQL.Resolver(_of => Manager)
export class UpsertManagerResolver {
  @TypeGraphQL.Mutation(_returns => Manager, {
    nullable: false
  })
  async upsertManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertManagerArgs): Promise<Manager> {
    return ctx.prisma.manager.upsert(args);
  }
}
