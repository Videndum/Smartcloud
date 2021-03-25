import * as TypeGraphQL from "type-graphql";
import { UpdateManyManagerArgs } from "./args/UpdateManyManagerArgs";
import { Manager } from "../../../models/Manager";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Manager)
export class UpdateManyManagerResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyManagerArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.manager.updateMany(args);
  }
}
