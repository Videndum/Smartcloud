import * as TypeGraphQL from "type-graphql";
import { DeleteManyManagerArgs } from "./args/DeleteManyManagerArgs";
import { Manager } from "../../../models/Manager";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Manager)
export class DeleteManyManagerResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyManagerArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.manager.deleteMany(args);
  }
}
