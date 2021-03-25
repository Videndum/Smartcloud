import * as TypeGraphQL from "type-graphql";
import { UpdateManagerArgs } from "./args/UpdateManagerArgs";
import { Manager } from "../../../models/Manager";

@TypeGraphQL.Resolver(_of => Manager)
export class UpdateManagerResolver {
  @TypeGraphQL.Mutation(_returns => Manager, {
    nullable: true
  })
  async updateManager(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManagerArgs): Promise<Manager | null> {
    return ctx.prisma.manager.update(args);
  }
}
