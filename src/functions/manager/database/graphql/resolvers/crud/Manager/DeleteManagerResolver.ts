import * as TypeGraphQL from "type-graphql";
import { DeleteManagerArgs } from "./args/DeleteManagerArgs";
import { Manager } from "../../../models/Manager";

@TypeGraphQL.Resolver(_of => Manager)
export class DeleteManagerResolver {
  @TypeGraphQL.Mutation(_returns => Manager, {
    nullable: true
  })
  async deleteManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManagerArgs): Promise<Manager | null> {
    return ctx.prisma.manager.delete(args);
  }
}
